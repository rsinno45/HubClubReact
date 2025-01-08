// netlify/functions/submit-form.js
import formData from "form-data";
import Mailgun from "mailgun.js";

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

    // Format certifications for email
    const federalCerts = Array.isArray(data.federalCertifications)
      ? data.federalCertifications.join(", ")
      : data.federalCertifications || "None";

    const localCerts = Array.isArray(data.localCertifications)
      ? data.localCertifications.join(", ")
      : data.localCertifications || "None";

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
      }),
    };

    // Auto-response to applicant
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

    const domain = process.env.MAILGUN_DOMAIN;
    if (!domain) {
      throw new Error("MAILGUN_DOMAIN environment variable is not set");
    }

    // Send both emails concurrently
    await Promise.all([
      mg.messages.create(domain, adminEmail),
      mg.messages.create(domain, userEmail),
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending emails" }),
    };
  }
};
