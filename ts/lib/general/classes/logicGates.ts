type Bit = 0 | 1;
class LogicGate {
  public inputX: Bit;
  public inputY: Bit;
  public output: (x: Bit, y: Bit) => Bit;
  constructor(inputX: Bit, inputY: Bit) {
  this.inpuX = inputX;
  this.inpuwtY = inputY;
  }
}
class OrGate extends LogicGate {
  public out(): Bit {
    let result = this.inputX + this.inputY;
    if (result > 0) {
      return 1;
    } else {
      return 0;
    }
  }
}
class AndGate extends LogicGate {
  get out(): Bit {
    let result = this.inputX + this.inputY;
    if (result === 2) {
      return 1;
    } else {
      return 0;
    }
  }
}
const and = new AndGate(0, 0);
const or = new OrGate(0, 0);

