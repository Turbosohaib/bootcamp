const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log("API key: " + process.env.SENDGRID_API_KEY);

const msg = {
  to: "recipient@example.com",
  from: "turbosohaib1234@gmail.com",
  subject: "Test Email from SendGrid",
  text: "This is a test email",
};

sgMail
  .send(msg)
  .then(() => console.log("✅ Email sent successfully"))
  .catch((error) => console.error("❌ Error sending email:", error));
