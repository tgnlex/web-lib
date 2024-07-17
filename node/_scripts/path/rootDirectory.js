import {normalize, resolve} from 'path';

const directoryName = './files/public';
const root = normalize(resolve(directoryName))


console.log(root);