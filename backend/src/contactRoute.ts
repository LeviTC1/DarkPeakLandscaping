import { Router } from "express";
import nodemailer from "nodemailer";

const contactRoute = Router();

type ContactRequestBody = {
  name: string;
  phone: string;
  email: string;
  address: string;
  workType: string;
  message: string;
  preferredContact: string;
  bestTime: string;
};

const requiredFields: Array<keyof ContactRequestBody> = [
  "name",
  "phone",
  "email",
  "address",
  "workType",
  "message",
  "preferredContact",
  "bestTime",
];

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

/**
 * Gmail tip: enable 2-Step Verification, then visit Google Account > Security > App passwords,
 * create a new password for "Mail" on your current device, and use that 16-character code as EMAIL_PASS.
 */

contactRoute.post("/", async (req, res) => {
  const body = req.body as Partial<ContactRequestBody>;
  const missingFields = requiredFields.filter((field) => {
    const value = body?.[field];
    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      error: `Missing fields: ${missingFields.join(", ")}`,
    });
  }

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("[api] Missing EMAIL_USER or EMAIL_PASS environment variables");
    return res.status(500).json({ success: false, error: "Email configuration is incomplete" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const { name, phone, email, address, workType, message, preferredContact, bestTime } = body as ContactRequestBody;

  const emailBody = [
    "You have a new enquiry from Dark Peak Landscaping:",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Address: ${address}`,
    `Work type: ${workType}`,
    `Preferred contact: ${preferredContact}`,
    `Best time to contact: ${bestTime}`,
    "",
    "Project details:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Dark Peak Landscaping" <${EMAIL_USER}>`,
      to: "liamthorpe52@gmail.com",
      subject: "New enquiry from Dark Peak Landscaping",
      text: emailBody,
      replyTo: email,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("[api] Failed to send enquiry email", error);
    return res.status(500).json({ success: false, error: "Unable to send message right now" });
  }
});

export default contactRoute;
