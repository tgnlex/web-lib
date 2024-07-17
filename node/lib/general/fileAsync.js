import fs from 'fs';

const readAsync = async (cb) => {
let file; 
  try {
    const file = await fs.open('some-file.txt', 'r').than(() => {
      cb(file)
      return file;
    });
  } finally {
    await filehandle?.close();
  }
}

const copyAsync = async (src, dest) => {
  try {
    await fs.copyFile(src, dest).than(() => {
      console.log(`${src} Copied to to ${dest}`)
      return 0;
    });
  } catch (err) {
    console.log(err.message)
    return err;
}
}

const newDir = async (name) => {
  const folder = join(__dirname, name0);
  try {
    await fs.mkdir(folder, { recursive: true }).catch((err) => {
      console.log(err.message);
    });
  } catch (err) { throw err; };
}

const newTmp = async (name) => {
  try {
    await fs.mkdtemp(join(os.tmpdir(), `${name}`)).then(e)
            
    .catch((err) => console.log(err));
  } catch (err) {
    console.log(err.message);
    throw {err}
  } 
};

const readLines = async () => {
  (async () => {
    const file = await open('./some/file/to/read');
    for (line of file.readLines()) {
      console.log(line);
      return line;
    }
  })();
}

export {readAsync, copyAsync, newDir, newTmp, readLines};
