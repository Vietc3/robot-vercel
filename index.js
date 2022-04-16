const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 8080 })
 
wss.on('connection', ws => {
  ws.onmessage = ({data}) => {
    wss.clients.forEach(function each(client) {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(`${data}`);
    }
  })}
})