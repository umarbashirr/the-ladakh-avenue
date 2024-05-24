import { resend } from "@/lib/resend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("hi");
    const { email } = await req.json();
    const response = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: "9f2e517c-b9fa-4b9c-8d3f-d2c09d29f4ac",
    });

    return Response.json({ response }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
