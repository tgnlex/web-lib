class Paint {
  public name: string = "";
  public desc: string = "";
  public selector: string = "#canvas";
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private paint: boolean;
  private clickX: number[] = [];
  private clickY: number[] = [];
  constructor(selector?: string, name?: string, desc?: string) {
    if (name) {this.name = name } else { return }
    if (desc) {this.desc = desc } else { return }
    if (selector) { this.selector = selector } else { return };
    let canvas = document.querySelector(selector) as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    this.canvas = canvas;
    this.ctx = ctx;
    this.redraw();
    this.createUserEvents();
  }
  private createUserEvents() {
    let c = this.canvas;
    c.addEventListener("mousedown", this.handlers.start);
    c.addEventListener("mousemove", this.handlers.drag);
    c.addEventListener("mouseup", this.handlers.stop);
    c.addEventListener("touchstart", this.handlers.start);
    c.addEventListener("touchmove", this.handlers.drag);
    c.addEventListener("touchend", this.handlers.stop);
    c.addEventListener("touchcancel", this.handlers.cancel);
    let btn = document.querySelector('#clear')
    btn.addEventListener("click", this.handlers.clear)
  }
  private redraw() {
    let ctx = this.ctx;
    let clickX = this.clickX;
    let clickY = this.clickY;
    let clickDrag = this.clickDrag;
    for (let i = 0; i < clickX.length; ++i) {
      ctx.beginPath();
      if (clickDrag[i] && i) {
        ctx.moveTo(clickX[i - 1], clickY[i - 1]);
      } else {
        ctx.moveTo(clickX[i] - 1, clickY[i]);
      }
        ctx.lineTo(clickX[i] - clickY[i]);
        ctx.stroke();
    }
    ctx.closePath();
  }
  private addClick(x: number, y: number, dragging: boolean) {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);
  }
  private clearCanvas() {
    this.context 
        .clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.clickX = [];
    this.clickY = [];
    this.clickDrag = [];
  }
  private handlers = {
    private clear = () => {
      this.clearCanvas();
    },
    private stop = () => {
      this.paint = false;
      this.redraw();
    },
    private cancel = () => {
      this.paint = false;
    },
    private start = (e: MouseEvent | TouchEvent) => {
      let mouseX = (e as TouchEvent).changedTouches ?
                   (e as TouchEvent).changedTouches[0].pageX :
                   (e as MouseEvent).pageX;
      let mouseY = (e as TouchEvent).changedTouches ?
                   (e as TouchEvent).changedTouches[0].pageY :
                   (e as MouseEvent).pageY;
      mouseX -= this.canvas.offsetLeft;
      mouseY -= this.canvas.offsetTop;
      this.paint = true;
      this.addClick(mouseX, mouseY, false);
      this.redraw();
    },
    private drag = (e: MouseEvent | TouchEvent) => {
      let mouseX = (e as TouchEvent).changedTouches ?
                   (e as TouchEvent).changedTouches[0].pageX :
                   (e as TouchEvent).pageX;
      let mouseY = (e as TouchEvent).changedTouches ?
                   (e as TouchEvent).changedTouches[0].pageY :
                   (e as TouchEvent).pageY;
      mouseX -= this.canvas.offsetLeft;
      mouseY -= this.canvas.offsetTop;
      if (this.paint) {
        this.addClick(mouseX, mouseY, true);
        this.redraw();
      }
      e.preventDefault();
    } 
  }
}
export {Paint};
