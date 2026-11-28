# Fire Alarm System Installation – Landing Page (The Fire Wala)

Single-page, mobile-first landing page for Meta (Facebook / Instagram) ads promoting
MSD Engineering – The Fire Wala's **Fire Alarm System Installation** service.

## Files
| Path | Purpose |
|---|---|
| `index.html` | The complete landing page (HTML + CSS + JS, no build step) |
| `assets/img/` | Logo, favicon and optimized photos (WebP) |
| `leads/google-apps-script.gs` | Google Sheets lead recorder (Apps Script) |
| `leads/SETUP.md` | Step-by-step guide to connect the form to Google Sheets |
| `assets/video/` | Project videos (audio removed – always play muted) |
| `assets/certs/` | ISO 7202, Udyam (MSME) and Trademark certificates |

## Configure (top of `index.html`, `window.FW_CONFIG`)
- `ALARM_SHEET_URL` – Web-App URL of the dedicated "Fire Alarm Leads" sheet (see `leads/SETUP.md`).
  While empty, each enquiry opens WhatsApp with the filled details so no lead is lost.
- `WHATSAPP` – number receiving WhatsApp enquiries (default `917772078610`).
- `META_PIXEL_ID` – Meta Pixel ID. Fires `PageView`, `InitiateCheckout` (form started),
  `Lead` (form submitted) and `Contact` (call / WhatsApp clicks).

UTM parameters and `fbclid` from the ad URL are captured automatically with every lead.

## Hosting
Upload `index.html` and the `assets/` folder to any static host (your web server, Netlify,
Vercel, GitHub Pages, Hostinger etc.) and use that URL as the ad's destination.

## Sections
Hero (headline + real-site video) → Lead form band → Client logo marquee →
Systems (Conventional vs Addressable + devices) → Project videos (muted) → Industries →
Process timeline → Why trust us (certificates + Google reviews) → FAQ → Final CTA → Footer.
Sticky Call / WhatsApp / FREE Survey bar on mobile. Montserrat headings, Safety Red accents —
deliberately different from the Hydrant & Sprinkler page.
