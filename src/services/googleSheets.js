import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_KEY_FILE,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const sheets = google.sheets({
  version: 'v4',
  auth,
});

export const appendApplication = async (application) => {
  const row = [
    application.createdAt.toISOString(),
    application.name,
    application.contact,
    application.age,
    application.source,
    String(application._id),
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Лист1!A:F',
    valueInputOption: 'RAW',
    requestBody: { values: [row] },
  });
};
