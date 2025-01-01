"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ITravelPackage } from "@/interfaces/package.interface";
import { cn } from "@/lib/utils";
import { PackageFormSchema } from "@/schemas/package-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

interface IPackageBookingForm {
  initialData: ITravelPackage | undefined;
}

const countArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const PackageBookingForm: React.FC<IPackageBookingForm> = ({
  initialData,
}) => {
  const form = useForm<z.infer<typeof PackageFormSchema>>({
    resolver: zodResolver(PackageFormSchema),
    defaultValues: {
      packageName: initialData?.title,
      packageSlug: `${process.env.NEXT_PUBLIC_APP_URL!}/our-packages/${
        initialData?.slug
      }`,
      name: "",
      email: "",
      phoneNumber: "",
      totalAdults: "1",
      totalChildren: "none",
      dateOfArrival: new Date(),
      dateOfDeparture: addDays(new Date(), 1),
      comment: "",
    },
  });

  const submitHandler = async (values: z.infer<typeof PackageFormSchema>) => {
    console.log(values);
    try {
      const response = await fetch("/api/package/order/checkout", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (response.status !== 200) {
        toast.error("Error while submission. Please retry!");
        return;
      }

      toast.success("Ticket submitted successfully!");
      form.reset();
      window.document.body.scrollTop = 0;
      window.location.reload();
    } catch (error: unknown) {
      toast.error("Error while submission. Please retry!");
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        className="mt-4 w-full space-y-4"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <FormField
          control={form.control}
          name="packageName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Package Name</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your name..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your email..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your phone number..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="totalAdults"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No. of Adults</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select total number of adults" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countArray.map((i) => (
                      <SelectItem key={i} value={i.toString()}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalChildren"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No. of Children</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select total number of children" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["none", ...countArray].map((i) => (
                      <SelectItem
                        key={i}
                        value={i.toString()}
                        className="capitalize"
                      >
                        {i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="dateOfArrival"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Arrival Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date: Date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfDeparture"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Departure Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date: Date) => date < addDays(new Date(), 1)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Any Comments</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any question or concern.."
                  className="resize-none"
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="flex items-center justify-center text-center gap-2"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="w-4 h-4 animate-spin duration-700 ease-in-out repeat-infinite" />
          )}
          {form.formState.isSubmitting ? "Please wait..." : "Get Quote Now"}
        </Button>
      </form>
    </Form>
  );
};
