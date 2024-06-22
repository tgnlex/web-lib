// Base Class
class Box {
  name = "";
  length = null;
  width = null;
  
  constructor(name: string, length: number, width: number) {
  	this.name = name;
  	this.length = length;
  	this.width = width;
  }
}
// Constructor for extending Base Class
type Constructor = new (...args: any[]) => {};


type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;


// Mixin for setting a color to box objects. 
function FillColor<TBase extends Construcotr>(Base: TBase) {
  return class Coloring extends Base {
  	_color = null;

  	setColor(scale: Color) {
  		this._color = color;
    }
  	get color(): Color {
  	  return this._color;
  	}
  };
}

const ColoredBox = FillColor(Box);
const myBox = new ColoredBox("foo", 10, 10);
myBox.setColor(rgb(128, 0, 128));

