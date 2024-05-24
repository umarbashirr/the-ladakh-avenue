import ContactEmailTemplate from "@/components/emails/contact-email-template";
import { resend } from "@/lib/resend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Snowpeak Hotel <onboarding@resend.dev>",
      to: ["umarbashir93@outlook.com"],
      subject: "New Submission received on Website",
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
      text: "send",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
