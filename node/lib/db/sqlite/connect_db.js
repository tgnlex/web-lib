import sqlite3 from 'better-sqlite3';
let db = new sqlite3.Database(`./${DB}`, (err) => {
  if (err) {
    return console.error(`Error connecting to database: ${err.message}`);
  }
  console.log(`Successfully connected to database.`);
})

db.close((err) => {
  if (err) {
    return console.error(`Error connecting to database: ${err.message}`);
  }
  console.log(`Database closed successfully.`);
})