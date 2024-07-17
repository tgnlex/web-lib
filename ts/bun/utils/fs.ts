import {log} from '../config/log.ts';

class File = {
  public static async read(filename: string) {
    return Bun.file(filename);
  };
  public static async logf(filename: string) {
    log.info(this.read(filename));
  };
  public static async write(filename: string, data: str) {
    await Bun.write(filename, data)
  };
  public static async copy(input: string, output: string) {
    let src = this.read(input);
    let dest = this.read(output);
    await this.write(dest, src);
  };
  public static writer = {
    public static async get(filename: string) {
      let file = this.read(filename);
      if (file) { 
        return file.writer() 
      } else { 
        log.error(`[FS]: Error trying to create writer from file: ${filename}.`)
      }
    }
    public static async write(filename: string, data: string) {
      let w = this.writer.get(filename);
      if (w) {
        w.write(data);
        log.info(`[FS]: Wrote to ${filename}`);
      } else {
        log.error(`[FS]: Failed to write to ${filename}`)
      }
    }
  }
}
export {File}
