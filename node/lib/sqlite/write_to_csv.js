export function* toRows(stmt) {
  yield stmt.columns().map(column => column.name)
  yield* stmt.raw().iterate();
}
export function writeToCSV(filename, stmt) {
  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(filename);
    for ( const row of toRows(stmt)) {
      stream.write(row.join(',') + '\n');
    }
  })
}