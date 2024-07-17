import fs from 'fs';
const json = (object) => {
  const data = JSON.stringify(object, null, 2);
  if (err) {throw err};
  return data;
}
const jparse = (jstr) => {
  const data = JSON.parse(jstr)
  if (err) {throw err};
  return data;
}
const jparseFile =  (filepath) => {
  const data = fs.readFileSync(filepath);
  if (err) {throw err};
  const jstr = jparse(data);
  return jstr; 
}
const writeJson = (object, filename) => {
  const jstr = json(object);
  writeFileSync(`${filename}.json`, jstr);
  if (err) { return err.message };
  return "success!";
}

export {json, jparse, writeJson, jparseFile};