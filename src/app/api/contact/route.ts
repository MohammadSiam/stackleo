import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { fname, lname, email, phone, service, message } = await req.json()

  if (!email || !message) {
    return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Stackleo Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `New enquiry${service ? ` — ${service}` : ''} from ${fname || ''} ${lname || ''}`.trim(),
    text: [
      `Name: ${fname} ${lname}`,
      `Email: ${email}`,
      `Phone: ${phone || 'N/A'}`,
      `Service: ${service || 'N/A'}`,
      '',
      message,
    ].join('\n'),
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
