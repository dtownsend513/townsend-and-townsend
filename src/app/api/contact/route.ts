import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, businessName, projectType, website, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Townsend Website <onboarding@resend.dev>",
      to: "dtownsend513@gmail.com",
      subject: `New Website Review Request from ${name}`,
      replyTo: email,
      html: `
        <h2>New Website Review Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Name:</strong> ${businessName || "Not provided"}</p>
        <p><strong>Project Type:</strong> ${projectType || "Not selected"}</p>
        <p><strong>Current Website:</strong> ${website || "Not provided"}</p>

        <hr />

        <p><strong>Project Details:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Email failed to send." },
      { status: 500 }
    );
  }
}