import db from './init_db.js';
const backup = () => {
  db.backup(`backup-${Date.now()}.db`, {
    progress({totalPages: t, remainingPages: r}) {
      current_progress = ((t - r) / t * 100).toFixed(1);
      console.log(`Backup progress: ${current_progress}`);
      return paused ? 0 : 200;
    }
  }).then(() => {
    console.log(`Backup completed successfully.`)
  }).catch(() => {
    console.log(`Error creating backup. See: ${err.message | err}`)
  })
}

backup();