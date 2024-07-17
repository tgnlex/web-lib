class DT {
  static date = new Date();
  static getDate(date: Date = this.date): string {
    let dateStr = date.toLocaleDateString();
    return `${dateStr}`;
  }
  static getTime(date: Date = this.date): string {
    let timeStr = date.toLocaleTimeString()
    return `${timeStr}`;
  }
  static timestamp(date: Date = this.date) {
    let stamp = date.now();
    return `${stamp}`;
  }
}

export {DT}
