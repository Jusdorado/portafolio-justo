import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Rate limiter: 5 requests per 15 minutes per IP
const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 900, // 15 minutes
});

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
  honeypot: z.string().max(0), // Anti-spam honeypot
});

// Email transporter configuration
const createTransporter = () => {
  if (process.env.SENDGRID_API_KEY) {
    // SendGrid configuration
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  } else if (process.env.MAILGUN_API_KEY) {
    // Mailgun configuration
    return nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: false,
      auth: {
        user: `postmaster@${process.env.MAILGUN_DOMAIN}`,
        pass: process.env.MAILGUN_API_KEY,
      },
    });
  } else {
    // SMTP configuration (Gmail, etc.)
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
};

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    try {
      await rateLimiter.consume(request.ip || 'anonymous');
    } catch {
      return NextResponse.json(
        { message: 'Demasiadas solicitudes. Inténtalo más tarde.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Check honeypot (anti-spam)
    if (validatedData.honeypot) {
      return NextResponse.json(
        { message: 'Solicitud no válida' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || process.env.SENDGRID_FROM_EMAIL || 'noreply@justogarciaferrandez.com',
      to: process.env.CONTACT_EMAIL_TO || 'justo.garcia.2004@gmail.com',
      subject: `[Portfolio] ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4B3621 0%, #3C2F2F 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #C9A66B; margin: 0; font-size: 24px;">Nuevo mensaje desde el portfolio</h1>
          </div>
          
          <div style="background: #F8F4EF; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #4B3621; margin: 0 0 10px 0;">Información del contacto:</h3>
              <p style="margin: 5px 0; color: #2B2B2B;"><strong>Nombre:</strong> ${validatedData.name}</p>
              <p style="margin: 5px 0; color: #2B2B2B;"><strong>Email:</strong> ${validatedData.email}</p>
              <p style="margin: 5px 0; color: #2B2B2B;"><strong>Asunto:</strong> ${validatedData.subject}</p>
            </div>
            
            <div>
              <h3 style="color: #4B3621; margin: 0 0 10px 0;">Mensaje:</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #C9A66B;">
                <p style="margin: 0; color: #2B2B2B; line-height: 1.6;">${validatedData.message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E6D5C3;">
              <p style="margin: 0; color: #B0A999; font-size: 14px;">
                Este mensaje fue enviado desde el formulario de contacto del portfolio de Justo García Ferrández.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        Nuevo mensaje desde el portfolio
        
        Nombre: ${validatedData.name}
        Email: ${validatedData.email}
        Asunto: ${validatedData.subject}
        
        Mensaje:
        ${validatedData.message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Save to database or external service
    // await saveToDatabase(validatedData);
    // await saveToAirtable(validatedData);
    // await saveToNotion(validatedData);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Datos del formulario no válidos', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Optional: Save to external services
async function saveToAirtable(data: any) {
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) return;

  try {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Name: data.name,
          Email: data.email,
          Subject: data.subject,
          Message: data.message,
          Date: new Date().toISOString(),
        },
      }),
    });

    if (!response.ok) {
      console.error('Airtable save failed:', await response.text());
    }
  } catch (error) {
    console.error('Airtable error:', error);
  }
}

async function saveToNotion(data: any) {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) return;

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          Name: { title: [{ text: { content: data.name } }] },
          Email: { email: data.email },
          Subject: { rich_text: [{ text: { content: data.subject } }] },
          Message: { rich_text: [{ text: { content: data.message } }] },
          Date: { date: { start: new Date().toISOString() } },
        },
      }),
    });

    if (!response.ok) {
      console.error('Notion save failed:', await response.text());
    }
  } catch (error) {
    console.error('Notion error:', error);
  }
}
