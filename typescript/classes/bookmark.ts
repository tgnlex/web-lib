import {URL} from './url.ts';

export class BookMark {
  name: string;
  url: URL;  
  favicon?: ImageBitmap;
}

export interface BookMarks {
  bookmarks: BookMark[] | BookMark;
}