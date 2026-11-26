/**
 * The Fire Wala – Fire Alarm landing page: lead capture to Google Sheets.
 *
 * Setup (5 minutes):
 * 1. Create a Google Sheet (e.g. "Fire Alarm Leads").
 * 2. Extensions → Apps Script → paste this whole file → Save.
 * 3. Deploy → New deployment → type "Web app"
 *      Execute as: Me   |   Who has access: Anyone
 * 4. Copy the Web-app URL and paste it into LEAD_ENDPOINT in index.html.
 * 5. (Optional) set NOTIFY_EMAIL below to receive an email for every new lead.
 */
var NOTIFY_EMAIL = ""; // e.g. "info@thefirewala.com"

var COLUMNS = ["submitted_at","name","phone","city","property_type","requirement","area","floors",
               "timeline","message","utm_source","utm_medium","utm_campaign","utm_content","fbclid","page"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
    var p = e.parameter || {};
    sheet.appendRow(COLUMNS.map(function (k) { return p[k] || ""; }));
    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, "New Fire Alarm Lead: " + (p.name || "") + " – " + (p.city || ""),
        COLUMNS.map(function (k) { return k + ": " + (p[k] || ""); }).join("\n"));
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
