import fs, { constants } from 'node:fs';
import path from 'node:path';

const  fRead = (path) => {
  try {
  const file = fs.readFileSync(path);
  return file;
  } catch(err) {
    throw err;
  }
}

const fWrite = (data, path, opts={options}) => {
  try {
    if (data != String | Number) {
      let str = JSON.stringify(data)
      fs.writeFileSync(path, str, options);
      if (err) {return err};
      console.log("Write Successful")
    } else {
      fs.writeFileSync(path, data, options)
      if (err) {return err};
      console.log("Write Successful!")
    }
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}
const fAppend = (file, data) => {
  appendFile(file, data, (err) => {
    if (err) throw err;
    console.log("success");
  }); 
}

const editFileName = (file, name) => {
  rename(`${file}`, `${name}`, (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  }); 
  } 

  const fDelete = (file) => {
    try { 
       fs.unlinkSync(`${file}`) 
     } catch (err) { 
       throw err;
     }
  }

const checkFile = (file) => {
  access(file, constants.F_OK, (err) => {
    if (err) {
      console.log(`${file} does not exist`)
      return 0;
    } else {
      console.log(`${file} Exists`);
      return 1;
    }
  });
}
// Check if the file is readable.
const checkWrite = (file) => {
  const c = checkFile(file);
  if (c = 1) { 
    access(c, constants.W_OK, (err) => {
      if (err) {
        console.log(`${file} is not writeable`)
        return 0;
      } else {
        console.log(`${file} is writeable`);
        return 1;
      }
    })
    } else {
      console.log('Cannot write check a non-existent file');
      return 0;
   }
  }
  const checkRead = (file) => {
    const c = fileCheck(file);
    if (c = 1) { 
      access(c, constants.R_OK, (err) => {
        if (err) {
          console.log(`${file} is not readable.`)
          return 0;
        } else {
          console.log(`${file} is readable.`);
          return 1;
        }
      })
      } else {
        console.log('Cannot write check a non-existent file');
        return 0;
     }
    }
   const checkPerms = (file) => {
     const r = checkRead(file);
     const w = checkWrite(file)
     if (r = 0, w = 0) {
      console.log(`${file} does not allow read or write.`)
      return 0;
     } else if (r = 1, w = 0) {
      console.log(`${file} allows reading, but not writing.`)
      return 1;
    } else if (w = 1, r = 0) {
      console.log(`${file} allows writing but not reading`)
      return 2;
    } else if (r = 1, w = 1) {
      console.log(`${file} allows both read and write`)
      return 3;
    } else  {
       let err = new Error('Something went wrong')
       console.log(err.message);
       return err.message;   
    }
  }

  const updatePerm = (file, permissions) => {
    chmod(file, permissions, (err) => {
      if (err) throw err;
      console.log('Permissions updates successfully!');
    }); 
  }
   

  const logDirContents = (dirname) => {
    try {
      const files = fs.readdir(dirname);
      for (const file of files) {
        console.log(file)
      }
    } catch (err) {
        throw {err};
      } 
    }
export {fAppend, fRead, logDirContents, logFile, fWrite, fDelete, updatePerm, checkPerms, checkFile, checkWrite, checkRead}