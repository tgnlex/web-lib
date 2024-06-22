
interface File {
  location: string,
  name: string,
  content: string,
  metadata: {}
}

interface ReadOnlyFile {
  readonly location: string,
  readonly name: string,
  readonly content: string
  readonly metadata: {}
}

