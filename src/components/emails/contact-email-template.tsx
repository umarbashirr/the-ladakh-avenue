import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

type ContactEmailTemplateProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactEmailTemplate = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}: ContactEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={title}>Hi Team!</Text>
        <Text style={heading}>
          We have received new form submission on our website with below
          details:
        </Text>
        <Text style={text}>
          <strong>Name:</strong> {firstName + " " + lastName}
        </Text>
        <Text style={text}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={text}>
          <strong>Phone:</strong> {phone}
        </Text>
        <Text style={text}>
          <strong>Message:</strong>
        </Text>
        <Text style={text}>{message}</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmailTemplate;

const main = {
  backgroundColor: "#f6f6f6",
  padding: "20px",
};

const container = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "5px",
  border: "1px solid #333",
};

const title = {
  fontSize: "18px",
  fontWeight: "semibold",
};

const heading = {
  fontSize: "16px",
};

const text = {
  fontSize: "16px",
  lineHeight: "1.5",
};
