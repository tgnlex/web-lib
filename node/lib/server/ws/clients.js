const clients = []

function handleClient(connection, req) {
  let ip = req.socket.remoteAddress;
  let client = newClient(ip);
  let id = client.id;
  console.log(`Received new connection..`)
  client.connection = connection;
  clients[id] = client;
  console.log(`${client.id} connected`)
}

function addClient(ip) {
  let id = uuidv4();
  let client = {id: id, ip: ip, nick: ""}
  clients.push(client);
  return client;
}

function setNick(id, name) {
  let client = clients[id]
  client.nickname = name;
  clients[id] = client;
}

function showClients() {
  if (clients.len > 0) {
    console.info(`Active clients`: clients.len);
    console.info(clients);
  } else {console.info('No Active Clients')}
}

export {connectClient, showClients, addClient, setNick}
