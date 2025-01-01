import * as z from "zod";

export const PackageFormSchema = z.object({
  packageName: z.string().min(2, {
    message: "Package name should be minimum 02 characters.",
  }),
  packageSlug: z.string().min(2, {
    message: "Package slug should be minimum 02 characters.",
  }),
  name: z.string().min(2, {
    message: "Name should be minimum 02 characters.",
  }),
  email: z.string().email({
    message: "Invalid Email",
  }),
  phoneNumber: z.string(),
  totalAdults: z.string(),
  totalChildren: z.string(),
  dateOfArrival: z.coerce.date(),
  dateOfDeparture: z.coerce.date(),
  comment: z.string().optional(),
});
