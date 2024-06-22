type Bit = 0 | 1;
class LogicGate {
  constructor(
    public inputX: Bit, 
    public inputY: Bit
  ) {}
}
class OrGate extends LogicGate {
  get output(): Bit {
    let result = this.inputX + this.inputY;
    if (result > 0) {
      return 1;
    } else {
      return 0;
    }
  }
}
class AndGate extends LogicGate {
  get output(): Bit {
    let result = this.inputX + this.inputY;
    if (result === 2) {
      return 1;
    } else {
      return 0;
    }
  }
}
const andGate = new AndGate(0, 0);
const orGate = new OrGate(0, 0);

