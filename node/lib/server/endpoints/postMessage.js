app.post('/chat', (req, res, next) => {
  let message = req.body;
  console.log(message);
  res.send(`<div id="bubble" class="bubble" >
              <div id="message>
                <h4>${message}</h4>
              </div>
            </div>`
});
