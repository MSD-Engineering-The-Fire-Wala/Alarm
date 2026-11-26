# Fire Alarm System Installation – Landing Page (The Fire Wala)

Single-page, mobile-first landing page for Meta (Facebook / Instagram) ads promoting
MSD Engineering – The Fire Wala's **Fire Alarm System Installation** service.

## Files
| Path | Purpose |
|---|---|
| `index.html` | The complete landing page (HTML + CSS + JS, no build step) |
| `assets/img/` | Logo, favicon and optimized photos (WebP) |
| `leads/google-apps-script.gs` | Optional Google Sheets lead collector |

## Configure (top of `index.html`, `window.FW_CONFIG`)
- `LEAD_ENDPOINT` – Google Apps Script web-app URL (see `leads/google-apps-script.gs`).
  If left empty, each enquiry opens WhatsApp with the filled details so no lead is lost.
- `WHATSAPP` – number receiving WhatsApp enquiries (default `917772078610`).
- `META_PIXEL_ID` – Meta Pixel ID. Fires `PageView`, `InitiateCheckout` (form started),
  `Lead` (form submitted) and `Contact` (call / WhatsApp clicks).

UTM parameters and `fbclid` from the ad URL are captured automatically with every lead.

## Hosting
Upload `index.html` and the `assets/` folder to any static host (your web server, Netlify,
Vercel, GitHub Pages, Hostinger etc.) and use that URL as the ad's destination.

## Sections
Hero + lead form → Trust stats & clients → Pain points → How it works → Components &
system types → Industries → 6-step process → Packages → Deliverables & standards →
Why The Fire Wala → FAQ (objection handling) → Final CTA → Footer.
Sticky Call / WhatsApp / Free Survey bar on mobile.
