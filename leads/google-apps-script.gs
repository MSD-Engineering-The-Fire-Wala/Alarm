/**
 * The Fire Wala – Fire Alarm landing page → Google Sheets lead recorder.
 * Full step-by-step instructions: leads/SETUP.md
 */

// Optional: e-mail address that gets an alert for every new lead ("" = off).
var NOTIFY_EMAIL = "";

var SHEET_NAME = "Fire Alarm Leads";
var COLUMNS = [
  ["submitted_at", "Date & Time"],
  ["name", "Name"],
  ["phone", "Mobile"],
  ["city", "City"],
  ["property_type", "Property Type"],
  ["requirement", "Service Required"],
  ["project_stage", "Project Stage"],
  ["area", "Built-up Area"],
  ["message", "Message"],
  ["service", "Landing Page"],
  ["utm_source", "UTM Source"],
  ["utm_medium", "UTM Medium"],
  ["utm_campaign", "UTM Campaign"],
  ["utm_content", "UTM Content (Ad)"],
  ["fbclid", "FB Click ID"],
  ["page", "Page URL"]
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(COLUMNS.map(function (c) { return c[1]; }));
    sh.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold").setBackground("#004890").setFontColor("#ffffff");
    sh.setFrozenRows(1);
  }
  return sh;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var p = (e && e.parameter) || {};
    var row = COLUMNS.map(function (c) {
      var v = p[c[0]] || "";
      if (c[0] === "submitted_at") v = v ? new Date(v) : new Date();
      if (c[0] === "phone" && v) v = "'" + v;          // keep as text, no scientific notation
      return v;
    });
    getSheet_().appendRow(row);
    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL,
        "New Fire Alarm lead: " + (p.name || "") + " (" + (p.city || "") + ")",
        COLUMNS.map(function (c) { return c[1] + ": " + (p[c[0]] || ""); }).join("\n"));
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Open the Web-app URL in a browser to check the deployment is live.
function doGet() {
  return ContentService.createTextOutput("The Fire Wala lead recorder is running.");
}

// Run once from the editor (▶ Run → testSetup) to create the header row and grant permissions.
function testSetup() {
  getSheet_();
}
