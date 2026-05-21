import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY environment variable." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, business, website, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Townsend & Townsend <contact@townsendsq.com>",
      to: "dtownsend513@gmail.com",
      subject: `New Website Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business || "Not provided"}</p>
        <p><strong>Current Website:</strong> ${website || "Not provided"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: "Email failed to send." },
      { status: 500 }
    );
  }
}