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
- `MAIN_SHEET_URL` – main website leads sheet (active now; leads tagged "Fire Alarm – …").
- `ALARM_SHEET_URL` – optional dedicated Fire Alarm sheet (see `leads/SETUP.md`); takes priority when set.
- `WHATSAPP` – number receiving WhatsApp enquiries (default `917772078610`).
- `META_PIXEL_ID` – Meta Pixel ID. Fires `PageView`, `InitiateCheckout` (form started),
  `Lead` (form submitted) and `Contact` (call / WhatsApp clicks).

UTM parameters and `fbclid` from the ad URL are captured automatically with every lead.

## Hosting
Upload `index.html` and the `assets/` folder to any static host (your web server, Netlify,
Vercel, GitHub Pages, Hostinger etc.) and use that URL as the ad's destination.

## Sections
Hero + lead form → Stats band → Services (Conventional / Addressable tabs + devices) →
Real work videos (muted) → How it protects + pain points → Industries → How we work (6 steps) →
Certificates (lightbox) → Client logos + Google reviews → Packages → Deliverables & standards →
FAQ → Final CTA → Footer. Sticky Call / WhatsApp / FREE Survey bar on mobile.
Design matches the Hydrant & Sprinkler landing page (Inter font, navy + orange).
