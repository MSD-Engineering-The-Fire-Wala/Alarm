# Fire Alarm leads → dedicated Google Sheet

Sheet: **Fire Alarm Leads** (same shared-drive folder as "The Fire Wala- Service Request")
https://docs.google.com/spreadsheets/d/19d1y-_Z21N4VFHiFixA0jW9eg93mAN47viMupmtwUQk/edit

Leads do NOT go to the main website sheet. Until the steps below are done, every enquiry
opens WhatsApp (77720 78610) with the filled details.

## One-time connection (about 5 minutes)
1. Open the **Fire Alarm Leads** sheet above.
2. **Extensions → Apps Script**. Delete the sample code, paste the full contents of
   `leads/google-apps-script.gs`, click **Save** (💾).
   - Optional: put an email inside `NOTIFY_EMAIL = ""` to get an email for every lead.
3. Choose **testSetup** in the function dropdown and click **▶ Run**.
   Allow access: choose your account → *Advanced* → *Go to project (unsafe)* → **Allow**.
   The heading row turns blue.
4. **Deploy → New deployment** → ⚙ → **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   → **Deploy** → copy the **Web app URL** (ends with `/exec`).
5. Paste that URL into `ALARM_SHEET_URL: ""` at the top of `index.html` (or send it to Claude),
   redeploy, submit one test enquiry and check the new row.

Columns: Date & Time, Name, Mobile, City, Property Type, Service Required, Project Stage,
Built-up Area, Message, Landing Page, UTM Source / Medium / Campaign / Content (Ad), FB Click ID, Page URL.

If you edit the script later: **Deploy → Manage deployments → Edit → New version** keeps the same URL.
