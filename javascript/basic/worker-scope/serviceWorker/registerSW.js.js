if ('serviceWorker' in navigator) {
	window.addEventListner('load', () => {
	  navigator.serviceWorker.register('./sw.js').then((registration) => {
	  	if(registration.active) {
	  		console.log('Service Worker is active.')
	  	}
	  })
	});
}

