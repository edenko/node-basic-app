const http = require('http');

const server = http.createServer();
server.listen('8080');
server.on('listening', () => {
  console.log('listening 8080 !!!');
});
server.on('request', (req, res) => {
  const { headers, method, url } = req;
  const userAgent = headers['user-agent'];

  let body = [];
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body);
  });

  // res.statusCode = 404;
  // res.setHeader('Content-Type', 'application/json');
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.write('<html>')
  res.write('<body>')
  res.write('<h1>hello node server !</h1>')
  res.write('</body>')
  res.write('</html>')
  res.end();
})