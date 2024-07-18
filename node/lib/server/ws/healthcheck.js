import {WebSocketServer} from 'ws';
const wss = new WebSocketServer({port: 8080 });
function heartbeat() {
  this.isAlive = true;
}


function connection() {
  ws.status = "Running"  // Connection with heartbeat support
  ws.isAlive = true;
  ws.on('error', console.error);
  ws.on('ping', heartbeat);
  ws.on('status', status());
}
function status() {
  let stats = ws.status;
  console.info(stats);
  ws.send(stats);
}
function ping() {
  if (ws.isAlive === false) return ws.terminate()
  ws.isAlive = false;
  ws.ping();
}
const health = setInterval(function pingAll() {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) return ws.terminate();
    ws.isAlive = false;
    ws.ping();
  })
}, 50000);
// Close function
function close() {
  ws.status = "Stopped";
  clearInterval(health);
}

