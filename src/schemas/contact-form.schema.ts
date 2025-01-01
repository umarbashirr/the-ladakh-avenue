import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name should be minimum 02 characters.",
  }),
  email: z.string().email({
    message: "Invalid Email",
  }),
  phoneNumber: z.string().optional(),
  subject: z.string().min(2, {
    message: "Subject is required and should be minimum 02 characters",
  }),
  message: z.string().min(2, {
    message: "Subject is required and should be minimum 02 characters",
  }),
});
