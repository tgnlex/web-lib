import path, {normalize, resolve} from 'path';

const isPathUnderRoot = normalize(resolve(filePath)).startsWith(root); 