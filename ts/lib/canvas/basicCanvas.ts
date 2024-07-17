import {Cnv} from '../type/canvas.ts';
import {elem} from './dom.ts';
class Canvas {
  public name: string = "";
  public desc: string = "";
  public selector: string = "#canvas"
  public ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  constructor(selector?: string, name?: string, description?: string) {
    if (name) { this.name = name } else { return };
    if (desc) { this.desc = desc } else { return };
    if (selector) { this.selector = selector } else { return };
    let canvas = elem(this.selector) as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    this.canvas = canvas;
    this.ctx = ctx; 
  }
}
export {Canvas}
