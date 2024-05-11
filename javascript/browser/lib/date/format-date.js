const formatDate = (timestamp) => 
  new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short', 
    dateStyle: 'short', 
  }).format(new Date(timestamp))