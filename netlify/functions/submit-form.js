// netlify/functions/submit-form.js
import formData from "form-data";
import Mailgun from "mailgun.js";
import fs from "fs";
import path from "path";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

export const handler = async (event) => {
  // Handle both direct POST requests and Netlify form webhooks
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the incoming data based on the source
    let data;
    if (event.headers["x-netlify-event"] === "submission-created") {
      // This is coming from Netlify's form webhook
      const payload = JSON.parse(event.body);
      data = payload.payload.data; // Netlify wraps form data in payload.data
    } else {
      // This is a direct POST to the function
      data = JSON.parse(event.body);
    }

    // Validate required fields
    if (!data.email || !data.name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Format NAICS codes
    const naicsCodes = [];
    for (let i = 1; i <= 9; i++) {
      if (data[`naicsCode${i}`]) {
        naicsCodes.push(data[`naicsCode${i}`]);
      }
    }
    const formattedNaicsCodes = naicsCodes.filter(Boolean).join(", ") || "None";

    // Format certifications - ensure we handle arrays properly
    const federalCerts = Array.isArray(data.federalCertifications)
      ? data.federalCertifications.join(", ")
      : typeof data.federalCertifications === "string"
      ? data.federalCertifications
      : "None";

    const localCerts = Array.isArray(data.localCertifications)
      ? data.localCertifications.join(", ")
      : typeof data.localCertifications === "string"
      ? data.localCertifications
      : "None";

    const domain = process.env.MAILGUN_DOMAIN;
    if (!domain) {
      throw new Error("MAILGUN_DOMAIN environment variable is not set");
    }

    // Admin notification email
    const adminEmail = {
      from: "Hub Club Chicago <info@hubclubchicago.com>",
      to: "victor@hubclubchicago.com",
      subject: `New Membership Application - ${data.name}`,
      template: "admin_notification",
      "h:X-Mailgun-Variables": JSON.stringify({
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        dob: data.dob,
        phone: data.phone,
        cell: data.cell,
        maritalStatus: data.maritalStatus,
        companyName: data.companyName,
        companyType: data.companyType,
        companyAddress: data.companyAddress,
        website: data.website || "Not provided",
        email: data.email,
        fein: data.fein,
        yearsInBusiness: data.yearsInBusiness,
        federalCertifications: federalCerts,
        localCertifications: localCerts,
        naicsCodes: formattedNaicsCodes,
      }),
    };

    // User auto-response email
    const userEmail = {
      from: "Hub Club Chicago <noreply@hubclubchicago.com>",
      to: data.email,
      subject: "Thank you for your Hub Club application",
      template: "user_autoresponse",
      "h:X-Mailgun-Variables": JSON.stringify({
        recipient: {
          name: data.name,
          plan: data.plan,
        },
      }),
    };

    try {
      // First, try to read the PDF file
      const pdfPath = path.join(
        __dirname,
        "documents",
        "membership-contract.pdf"
      );
      console.log("Attempting to read PDF from:", pdfPath);

      // Check if file exists before reading
      if (!fs.existsSync(pdfPath)) {
        throw new Error(`PDF file not found at path: ${pdfPath}`);
      }

      const pdfContent = fs.readFileSync(pdfPath);
      console.log(
        "PDF file read successfully, size:",
        pdfContent.length,
        "bytes"
      );

      // Add attachment to user email if PDF is found
      userEmail.attachment = [
        {
          data: pdfContent,
          filename: "membership-contract.pdf",
          contentType: "application/pdf",
        },
      ];
      console.log("PDF attachment added to email");
    } catch (pdfError) {
      console.error("PDF Error:", pdfError.message);
      console.error("PDF Error Stack:", pdfError.stack);
      // Continue without the PDF if there's an error
    }

    // Send both emails
    console.log("Sending emails...");
    await Promise.all([
      mg.messages.create(domain, adminEmail),
      mg.messages.create(domain, userEmail),
    ]);
    console.log("Emails sent successfully");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully" }),
    };
  } catch (error) {
    console.error("Function Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Error sending emails",
        details: error.message,
      }),
    };
  }
};
