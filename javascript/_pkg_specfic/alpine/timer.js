Alpine.data('timer', () => ({
	timer: null, 
	counter: 0,
	init() {
	  this.timer = setInterval(() => {
	    console.log(++this.counter);
	  }, 1000);
	},
	destroy() {
	  clearInterval(this.timer);
	}
}))