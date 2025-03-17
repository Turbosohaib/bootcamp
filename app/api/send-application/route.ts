import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
console.log("API KEY: ", process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { to, subject, text } = await req.json();

    const msg = {
      to, // Receiver's email
      from: process.env.SENDGRID_FROM_EMAIL as string, // Your verified email
      subject,
      text,
      html: `<p>${text}</p>`, // Optional HTML version
    };

    await sgMail.send(msg);
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("SendGrid Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
