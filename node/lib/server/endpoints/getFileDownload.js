
import express from 'express';
import path from 'path';
const app = express();

// path to where the files are stored on disk
const FILES_DIR = path.join(__dirname, 'files')

app.get('/files/:file(*)', (req, res, next) => {
    res.download(req.params.file, { root: FILES_DIR }, (err) => {
        if (!err) {
          console.log('File Sent Sucessfully')
          return;
        } else if (err.status !== 404) {
          return next(err); // non-404 error
          res.status = 404;
          res.send('Cant find that file, sorry!');
        }
    });
});


