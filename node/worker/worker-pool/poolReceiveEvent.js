pool.exev('eventExample', [], {
  on: function (payload) {
    if (payload.status === 'in_progress') {
    	console.log('[POOL]: Event in progress...')
    } else if (payload.status === 'complete') {
    	console.log('[POOL]: Event Complete!')
    }
  }
})