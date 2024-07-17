import {password} from 'bun';
class Hash {
  static async gen(str: string) {
    const hash = await password.hash(str);
    return hash;
  };
  static async check(pw: string, hash: string) {
    const results = await password.verify(pw, hash);
    return results;
  }
}

export {Hash};


