type Bit = 0 | 1;
interface Binary {
  bits: Bit[]
}

interface LogicGate {
  inputX: Bit;
  inputY: Bit;
  output: Bit;
}
