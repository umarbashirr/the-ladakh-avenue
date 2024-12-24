import { transporter } from "@/helper/mail-transporter";
import { NextResponse } from "next/server";
import * as z from "zod";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10, {
    message: "Enter valid phone number",
  }),
  message: z.string().min(2),
});

export async function POST(req: Request) {
  const request: any = await req.json();

  const fields = formSchema.safeParse(request);

  if (!fields.success) {
    return NextResponse.json(fields.error.flatten().fieldErrors);
  }

  const { firstName, lastName, email, phone, message } = fields.data;

  const emailTemplate = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">

        <p style="font-size: 16px; margin-bottom: 10px;"><strong>Dear Team,</strong></p>
        <p style="margin-bottom: 20px;">We have received a new ticket submission on our website with the details below:</p>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                  firstName + " " + lastName
                }</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
            </tr>

            <tr>
                <td style="padding: 10px; font-weight: bold;">Message:</td>
                <td style="padding: 10px;">${message}</td>
            </tr>
        </table>

        <p style="margin-top: 20px;">Regards,</p>
        <p style="font-weight: bold;">Dev Team</p>
    </div>
`;

  // send mail with defined transport object
  await transporter.sendMail({
    from: "The Ladakh Avenue <hotels@ecodiscovertravel.com>", // sender address
    to: "hotels@ecodiscovertravel.com, ", // list of receivers
    subject: "Official Website | Support Ticket Received", // Subject line
    text: request.message, // plain text body
    html: emailTemplate,
  });

  return NextResponse.json({
    message: "Form Submitted Successfully",
    success: true,
  });
}
