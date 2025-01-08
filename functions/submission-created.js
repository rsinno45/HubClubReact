// functions/submission-created.js
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

exports.handler = async (event, context) => {
  const { payload } = JSON.parse(event.body);
  const data = payload.data;

  // Email to admin
  const adminEmail = {
    from: "Hub Club Chicago <victor@hubclubchicago.com>",
    to: "victor@hubclubchicago.com", // Replace with your email
    subject: `New Membership Application - ${data.name}`,
    template: "admin_notification", // Create this template in Mailgun
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
      website: data.website,
      email: data.email,
      fein: data.fein,
      yearsInBusiness: data.yearsInBusiness,
      federalCertifications: data.federalCertifications || "None",
      localCertifications: data.localCertifications || "None",
    }),
  };

  // Auto-response to applicant
  const userEmail = {
    from: "Hub Club <victor@hubclubchicago.com>",
    to: data.email,
    subject: "Thank you for your Hub Club application",
    template: "user_autoresponse", // Create this template in Mailgun
    "h:X-Mailgun-Variables": JSON.stringify({
      name: data.name,
    }),
    attachment: [
      {
        filename: "HubClubApp.pdf",
        data: require("fs").readFileSync("./documents/HubClubApp.pdf"),
      },
    ],
  };
  try {
    console.log("Attempting to send admin email...");
    await mg.messages.create(process.env.MAILGUN_DOMAIN, adminEmail);
    console.log("Admin email sent");

    console.log("Attempting to send user email...");
    await mg.messages.create(process.env.MAILGUN_DOMAIN, userEmail);
    console.log("User email sent");
  } catch (error) {
    console.error("Mailgun Error:", error);
  }
};
