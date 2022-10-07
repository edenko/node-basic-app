const http = require('http');

const server = http.createServer();
server.listen('8080');
server.on('listening', () => {
  console.log('listening 8080 !!!');
});
server.on('request', (req, res) => {
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  if(req.method === 'POST') {
    req.pipe(res);
  }else {
    res.statusCode = 400;
    res.end();
  }
})