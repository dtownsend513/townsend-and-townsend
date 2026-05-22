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

    const {
      name,
      email,
      business,
      businessType,
      website,
      budget,
      message,
    } = await req.json();

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
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111827;">
          
          <h2 style="margin-bottom: 20px;">
            New Website Inquiry
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>

            <tr>
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;">${email}</td>
            </tr>

            <tr>
              <td style="padding: 10px; font-weight: bold;">Business:</td>
              <td style="padding: 10px;">
                ${business || "Not provided"}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px; font-weight: bold;">Business Type:</td>
              <td style="padding: 10px;">
                ${businessType || "Not provided"}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px; font-weight: bold;">Current Website:</td>
              <td style="padding: 10px;">
                ${website || "Not provided"}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px; font-weight: bold;">Project Budget:</td>
              <td style="padding: 10px;">
                ${budget || "Not provided"}
              </td>
            </tr>
          </table>

          <hr style="margin: 30px 0;" />

          <h3>Project Details</h3>

          <p style="line-height: 1.8;">
            ${message}
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Email failed to send." },
      { status: 500 }
    );
  }
}