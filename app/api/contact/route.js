import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── SANITISE ────────────────────────────────────────────────────────────────
// Strip HTML tags from user input before embedding in the email body.
// Prevents malicious content being rendered as markup.
function sanitise(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// ─── EMAIL TEMPLATE ──────────────────────────────────────────────────────────
function buildEmail({ name, email, subject, message }) {
  const n = sanitise(name);
  const e = sanitise(email);
  const s = sanitise(subject);
  const m = sanitise(message).replace(/\n/g, "<br />");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0;padding:0;background:#09090b;font-family:system-ui,-apple-system,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 16px;">
        <tr>
          <td align="center">
            <table width="100%" style="max-width:560px;background:#18181b;border:1px solid #27272a;border-radius:16px;overflow:hidden;">

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#7c3aed,#a21caf);padding:28px 32px;">
                  <p style="margin:0;color:#e9d5ff;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">
                    Haza&apos;ElDevs Portfolio
                  </p>
                  <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:700;">
                    New project enquiry
                  </h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:32px;">

                  <!-- Fields -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #27272a;">
                        <p style="margin:0 0 2px;color:#71717a;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Name</p>
                        <p style="margin:0;color:#f4f4f5;font-size:15px;">${n}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #27272a;">
                        <p style="margin:0 0 2px;color:#71717a;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Email</p>
                        <p style="margin:0;font-size:15px;">
                          <a href="mailto:${e}" style="color:#a78bfa;text-decoration:none;">${e}</a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #27272a;">
                        <p style="margin:0 0 2px;color:#71717a;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Project type</p>
                        <p style="margin:0;color:#f4f4f5;font-size:15px;">${s || "Not specified"}</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Message -->
                  <p style="margin:0 0 8px;color:#71717a;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">
                    Message
                  </p>
                  <div style="background:#09090b;border:1px solid #27272a;border-radius:10px;padding:16px 20px;color:#d4d4d8;font-size:15px;line-height:1.7;">
                    ${m}
                  </div>

                  <!-- Reply CTA -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                    <tr>
                      <td>
                        <a href="mailto:${e}?subject=Re: ${s || "Your enquiry"}"
                          style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#a21caf);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 24px;border-radius:100px;">
                          Reply to ${n} →
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:20px 32px;border-top:1px solid #27272a;">
                  <p style="margin:0;color:#52525b;font-size:12px;">
                    Sent from the contact form at
                    <a href="https://www.hazaeldevs.com" style="color:#7c3aed;text-decoration:none;">hazaeldevs.com</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

// ─── HANDLER ─────────────────────────────────────────────────────────────────
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields before hitting Resend
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: "Invalid email address." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      // ✦ Once your domain is verified in Resend, change this to:
      //   from: "Haza'ElDevs <hello@hazaeldevs.com>"
      // Until then, the sandbox address works for testing only.
      from: "Haza'ElDevs Portfolio <onboarding@resend.dev>",
      to: ["hazaeldevs@gmail.com"],
      subject: `[Portfolio] ${subject || "New enquiry"} — ${name}`,
      // reply_to lets you hit Reply in Gmail and go straight to the sender
      reply_to: email,
      html: buildEmail({ name, email, subject, message }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("[contact route]", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
