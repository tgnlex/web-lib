const checkWorkerSupport = () => {
    if (typeof(Worker) !== "undefined") {
        console.log('Yes, Web workers are Supported!')  
    } else {
	    console.log('Sorry, Web workers are not supported here.')
    }
}