import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const content = formData.get('content') as string;
  const file = formData.get('file') as File;

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['jill.perry0208@icloud.com'],
      subject: subject,
      react: EmailTemplate({
        username,
        email,
        content,
      }),
      attachments: [{ filename: file.name, content: buffer }],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
