"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, formatDate } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  checkInDate: z.date({
    required_error: "Check-in date is required.",
  }),
  checkOutDate: z.date({
    required_error: "Check-out date is required.",
  }),
  totalPerson: z.coerce.number(),
  totalRooms: z.coerce.number(),
});

const HeroForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const checkInDate = formatDate(values.checkInDate, "yyyy-MM-dd");
    const checkOutDate = formatDate(values.checkOutDate, "yyyy-MM-dd");
    window.open(
      `https://bookings.asiatech.in/?page=8149&checkin=${checkInDate}&checkout=${checkOutDate}`,
      "_blank"
    );
  }
  return (
    <div className="flex items-center justify-center z-30 relative lg:px-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white px-8 py-8 rounded-lg shadow-md w-full lg:items-end lg:max-w-7xl"
        >
          <div className=" grid gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-4 lg:items-end">
            <FormField
              control={form.control}
              name="checkInDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="block mb-1">Check-in</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl className="w-full">
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
                            <span>Select Check-in Date</span>
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
                        disabled={(date) =>
                          date <
                          new Date(new Date().setDate(new Date().getDate() - 1))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="checkOutDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="block mb-1">Check-out</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl className="w-full">
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
                            <span>Select Check-out Date</span>
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
                        disabled={(date) =>
                          date >
                          new Date(
                            new Date().setDate(new Date().getDate() + 180)
                          )
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalPerson"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="mb-1">No. of Person</FormLabel>
                  <FormControl>
                    <Input type="number" step={1} min={1} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalRooms"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="mb-1">No. of Rooms</FormLabel>
                  <FormControl>
                    <Input type="number" step={1} min={1} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-end mt-4">
            <Button type="submit" className="ml-auto  self-end">
              Check Availability
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default HeroForm;
