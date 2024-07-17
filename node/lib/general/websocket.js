const clients = [];
const messages = [];

function noop() {};

function heartbeat() {
  this.isAlive = true;
}

function handleClient(clients, ip) {
  const userId = uuidv4();
  const newClient = {"id": userId, "IP": ip};
  clients.push(newClient);
  clients[userId] = connection;  
  console.log(`User: ${userId} has connected successfully. [IP: ${ip} ]`);

}

function connection(ws, req) {
  const userIp = req.connection.remoteAddress;
  handleClient(clients, userId, userIp);
  ws.send(`[WSS]: ${userId} has connected successfully.`)
}



function ack(error) {
  if (error) {
    console.log(error);
    return error;
  }
}

function open(data) {
  ws.send(data, ack(err))
}

function timeout() {
  ws.send(Date.now(), ack(err));
};

function incoming() {
  console.log(message);
  messages.push(message);
  setTimeout(timeout(), ack(err));
}

function close() {
  console.log('disconnected');
}


function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();
    ws.isAlive = false;
    ws.ping(noop);
  });
}

export {clients, messages, connection, ack, open, incoming, close, ping, heartbeat, noop, handleClient};