
const clients = [];
const messages = [];

const sendEventsToAll = (newMessage) => {
  clients.forEach(client => client.response.write(`data: ${JSON.stringify(message)}`))
}

const addEvent = (req, res, next) => {
  const newMessage = req.body;
  messages.push(newMessage);
  res.json(newMessage);
  return sendEventsToAll(newMessage);
};

// app.post('/events/messages/new', addEvent);