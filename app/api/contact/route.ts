import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getContactConfig } from "@/lib/contact-config";
import { validateContact, type ContactFormData } from "@/lib/validate-contact";

export async function POST(request: Request) {
  const data = (await request.json()) as ContactFormData;

  const result = validateContact(data);
  if (!result.valid) {
    return NextResponse.json({ errors: result.errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const { to, from } = getContactConfig();
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `New contact from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "—"}\nService: ${data.serviceInterest}\n\n${data.message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
