import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

function sanitise(str = "") {
  return String(str).replace(/[<>"'&]/g, "").trim();
}

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email?.trim()) {
      return Response.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!AUDIENCE_ID) {
      console.error("RESEND_AUDIENCE_ID is not set");
      return Response.json({ success: false }, { status: 500 });
    }

    // Add contact to Resend Audience
    await resend.contacts.create({
      email: sanitise(email),
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    // Send confirmation email to subscriber
    await resend.emails.send({
      from: "Haza'ElDevs <onboarding@resend.dev>",
      // ✦ Change to your verified domain when ready:
      // from: "Haza'ElDevs <hello@hazaeldevs.com>",
      to: [email],
      subject: "You're subscribed to Haza'ElDevs",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <body style="margin:0;padding:0;background:#09090b;font-family:system-ui,-apple-system,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 16px;">
            <tr><td align="center">
              <table width="100%" style="max-width:520px;background:#18181b;border:1px solid #27272a;border-radius:16px;overflow:hidden;">
                <tr>
                  <td style="background:linear-gradient(135deg,#7c3aed,#a21caf);padding:24px 32px;">
                    <p style="margin:0;color:#e9d5ff;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Haza&apos;ElDevs</p>
                    <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:700;">You&apos;re subscribed</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px;">
                    <p style="margin:0 0 16px;color:#d4d4d8;font-size:15px;line-height:1.7;">
                      Thanks for subscribing. When I publish something new — practical writing on websites, business systems, and building things that actually work — you&apos;ll get it.
                    </p>
                    <p style="margin:0 0 24px;color:#d4d4d8;font-size:15px;line-height:1.7;">
                      No fluff, no weekly roundups. Just the post, when it&apos;s ready.
                    </p>
                    <a href="https://www.hazaeldevs.com/blog"
                      style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#a21caf);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 24px;border-radius:100px;">
                      Read the blog →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 32px;border-top:1px solid #27272a;">
                    <p style="margin:0;color:#52525b;font-size:12px;">
                      You subscribed at <a href="https://www.hazaeldevs.com" style="color:#7c3aed;text-decoration:none;">hazaeldevs.com</a>.
                      Don&apos;t want these? You can unsubscribe at any time.
                    </p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("[newsletter route]", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
