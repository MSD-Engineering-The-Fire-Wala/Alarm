# Record landing-page leads in Google Sheets (about 5 minutes)

1. Go to **sheets.google.com**, create a blank spreadsheet and name it, e.g. **"The Fire Wala – Leads"**.
2. In that sheet open **Extensions → Apps Script**.
3. Delete the sample code, paste the full contents of `leads/google-apps-script.gs`, click **Save** (💾).
   - Optional: put an email inside `NOTIFY_EMAIL = ""` to get an email for every lead.
4. In the function dropdown choose **testSetup** and click **▶ Run**.
   Google asks for permission → choose your account → *Advanced* → *Go to project (unsafe)* → **Allow**.
   A tab **"Fire Alarm Leads"** with blue headings now appears in the sheet.
5. Click **Deploy → New deployment** → gear icon ⚙ → **Web app**.
   - Description: `Fire Alarm leads`
   - Execute as: **Me**
   - Who has access: **Anyone**
   Click **Deploy** and **copy the Web app URL** (ends with `/exec`).
6. Open `index.html`, find `LEAD_ENDPOINT: ""` near the top and paste the URL between the quotes:
   `LEAD_ENDPOINT: "https://script.google.com/macros/s/XXXX/exec",`
7. Upload the updated `index.html`, submit a test enquiry, and check that a new row appears in the sheet.

Notes
- Each row stores date/time, name, mobile, city, property type, service, project stage, area,
  message and the ad tracking details (UTM source / campaign / ad and Facebook click ID).
- The same Apps Script can serve the Hydrant & Sprinkler page too — rows are labelled by "Landing Page".
- If you edit the script later, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.
