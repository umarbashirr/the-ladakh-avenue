"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { faqs } from "@/lib/data";

const FAQAccordionContainer = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((item, index) => {
        return (
          <AccordionItem value={item.answer} key={index}>
            <AccordionTrigger>{item?.question}</AccordionTrigger>
            <AccordionContent>{item?.answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQAccordionContainer;
