type ImageFileType = "jpg" | "jpeg" | "gif" | "png" | "bmp" | "svg" | "eps";

interface File {
  location: string,
  name: string,
  filetype: string, 
  content: string,
  metadata: {}
}

interface Image {
  location: string,
  name: string, 
  filetype: ImageFileType,
  content: string,
  metadata: {}
}

interface ReadOnlyFile {
  readonly location: string,
  readonly filetype: string,
  readonly name: string,
  readonly content: string
  readonly metadata: {}
}

interface ReadOnlyImage {
  readonly location: string,
  readonly name: string, 
  readonly filetype: ImageFileType,
  readonly content: string,
  readonly metadata: {}
}

