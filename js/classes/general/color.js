class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
  constructor(r, g, b) {
    this.values = rgbToHSL ([r, g, b]);
  }
  getRed() {
    return this.values[0];
  }
    setRed(value) {
    this.values[0] = value;
  }
  getGreen() {
    return this.values[1];
  }
    setGreen(value) {
    this.values[1] = value;
  }
  getBlue() {
    return this.values[2];
  }
  setBlue(value) {
    this.values[2] = value;
  }
}

const red = new Color(255, 0, 0);
const crimson = new Color(220, 20, 60);
const green = new Color(0, 255, 0);
const blue = new Color(0, 0, 255);

red.setRed()
green.setGreen();
blue.setBlue();

console.log(red.getRed());

console.log(green.getGreen());
console.log(blue.getBlue());