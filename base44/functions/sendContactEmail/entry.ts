import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, company, type, message } = await req.json();

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: "team@targetmedia-ads.com",
      subject: `New Contact Form Submission from ${name}`,
      body: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nType: ${type}\n\nMessage:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});