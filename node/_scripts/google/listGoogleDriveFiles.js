const { google } = require('googleapis');

// Example using Google Drive API to list filenames in user's Drive.
const drive = google.drive('v3');
drive.files.list({
  auth: oauth2Client,
  pageSize: 10,
  fields: 'nextPageToken, files(id, name)',
}, (err1, res1) => {
  if (err1) return console.log('The API returned an error: ' + err1);
  const files = res1.data.files;
  if (files.length) {
    console.log('Files:');
    files.map((file) => {
      console.log(`${file.name} (${file.id})`);
    });
  } else {
    console.log('No files found.');
  }
});
