customElements.define('counter',
class Counter extends HTMLElement {
	#xValue =  0;
	constructor() {
	  super();
	this.onclick = this.#clicked.bind(this);
	}
	get #x() {
	  return this.#xValue
	}
    set #x(value) {
    window.requestAnimationFrame(this.#render.bind(this)) 
    }
	#clicked() {
	  this.#x++;
	}
	#render() {
	  this.textContent = this.#x.toString();
	}
}
);