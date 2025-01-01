import { transporter } from "@/helper/mail-transporter";
import { PackageFormSchema } from "@/schemas/package-form.schema";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedFields = PackageFormSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json(validatedFields.error.flatten().fieldErrors, {
        status: 400,
      });
    }

    const {
      name,
      email,
      phoneNumber,
      packageName,
      packageSlug,
      totalAdults,
      totalChildren,
      dateOfArrival,
      dateOfDeparture,
    } = validatedFields.data;

    const emailTemplate = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
        <p style="font-size: 16px; margin-bottom: 10px;"><strong>Dear Team,</strong></p>
        <p style="margin-bottom: 20px;">We have received a new booking inquiry on our website with the following details:</p>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phoneNumber}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Package Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${packageName}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Package Link:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                    <a href="${packageSlug}" style="color: #0073e6; text-decoration: none;">
                        ${packageSlug}
                    </a>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Total Adults:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${totalAdults}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Total Children:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${totalChildren}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Date of Arrival:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${format(
                  dateOfArrival,
                  "dd MMM yyyy"
                )}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold;">Date of Departure:</td>
                <td style="padding: 10px;">${format(
                  dateOfDeparture,
                  "dd MMM yyyy"
                )}</td>
            </tr>
        </table>

        <p style="margin-top: 20px;">Regards,</p>
        <p style="font-weight: bold;">Dev Team</p>
    </div>
`;

    await transporter.sendMail({
      from: "The Ladakh Avenue <hotels@ecodiscovertravel.com>", // sender address
      to: "hotels@ecodiscovertravel.com, ", // list of receivers
      subject: "Official Website | Package Booking Received", // Subject line
      html: emailTemplate,
    });

    return NextResponse.json("Email Sent", { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error?.message, { status: 500 });
  }
}
