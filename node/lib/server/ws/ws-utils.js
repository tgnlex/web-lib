const messages = [];

function noop() {};


function ack(error) {
  if (error) {
    console.error(error);
    return error;
  } else {
    ws.send('ACK')
  }
}

function message(data) {
  ws.send(data, ack(err))
}

function timestamp() {
  ws.send(Date.now(), ack(err));
  console.info(Date.now())
};

function incoming() {
  console.log(message);
  messages.push(message);
  timestamp();
}

function close() {
  console.info(`[WS]: Disconnected `)
  console.info(`[WS]: {${Date.toLocaleString}}`);
}


export {connection, ack, message, close, noop, incoming, timestamp};
