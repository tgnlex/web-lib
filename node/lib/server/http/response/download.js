import path from 'path';

// path to where the files are stored on disk
const DIR = path.join(__dirname, 'files/')

function handleDownload (req, res, next) => {
    res.download(req.params.file, { root: DIR }, (err) => {
        if (!err) {
          console.log('File Sent Sucessfully')
          return;
        } else if (err) {
          console.error(err);
          res.send('Failed to download file.').status;
        }
                
    });
});


