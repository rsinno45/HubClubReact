// functions/submission-created.js
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { payload } = JSON.parse(event.body);
  const data = payload.data;

  // Configure email transporter (using example with Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "your-email@example.com", // Replace with your email
    subject: `New Membership Application - ${data.name}`,
    html: `
      <h2>New Membership Application</h2>
      
      <h3>Plan Information</h3>
      <p>Selected Plan: ${data.plan}</p>

      <h3>Applicant Information</h3>
      <p>Name: ${data.name}</p>
      <p>Address: ${data.address}</p>
      <p>City: ${data.city}</p>
      <p>State: ${data.state}</p>
      <p>ZIP: ${data.zipCode}</p>
      <p>DOB: ${data.dob}</p>
      <p>Phone: ${data.phone}</p>
      <p>Cell: ${data.cell}</p>
      <p>Marital Status: ${data.maritalStatus}</p>

      <h3>Company Information</h3>
      <p>Company Name: ${data.companyName}</p>
      <p>Company Type: ${data.companyType}</p>
      <p>Company Address: ${data.companyAddress}</p>
      <p>Website: ${data.website}</p>
      <p>Email: ${data.email}</p>
      <p>FEIN: ${data.fein}</p>
      <p>Dun & Bradstreet #: ${data.dunsBradstreet}</p>
      <p>Years in Business: ${data.yearsInBusiness}</p>
      <p>Number of Employees: ${data.numberOfEmployees}</p>
      <p>HUBZone Employees: ${data.hubzoneEmployees}</p>

      <h3>Business Information</h3>
      <p>Description: ${data.businessDescription}</p>
      <p>UEI #: ${data.ueiNumber}</p>
      <p>Cage Code: ${data.cageCode}</p>
      <p>NAICS Codes: ${Array(9)
        .fill()
        .map((_, i) => data[`naicsCode${i + 1}`])
        .filter(Boolean)
        .join(", ")}</p>
      
      <h3>Certifications</h3>
      <p>Federal Certifications: ${data.federalCertifications || "None"}</p>
      <p>Local Certifications: ${data.localCertifications || "None"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error sending email",
        error: error.message,
      }),
    };
  }
};
