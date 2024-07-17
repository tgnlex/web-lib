const clients = [];
const eventsHandler = (data, req, res, next) => {
  const headers = {
    'Content-Type': 'text/event-stream', 
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };  
  const clientId = Date.now();
  const newClient = { id: clientId, res }
  const eventData = `data: ${JSON.stringify(data)}`;
  res.writeHead(200, headers);
  res.write(data);
  clients.push(newClient);

  req.on('close', () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter(client => client.id !== clientId);
  })
  



}