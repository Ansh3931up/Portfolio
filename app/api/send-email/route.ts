import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_TO!,
      replyTo: body.from_email,
      subject: body.subject,
      text: `From: ${body.from_name}\nEmail: ${body.from_email}\n\n${body.message}`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
