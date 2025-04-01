import http from 'http';
import { doSomething } from './my_modules/customModule.js'

const server = http.createServer((req, res) => {

  // uncomment this, if you want to get parameters from the GET method:
  // const [path, queryString] = req.url.split('?');
  // const params = new URLSearchParams(queryString);

  // And then, you can get parameters by name, like this:
  // const name = params.get('name') || 'Guest';
  // const country = params.get('country') || 'Somewhere';
  // console.log(name);



  // uncomment this, if you want to get the pathparameters from the post:
  // const { method, url } = req;
  // const { pathname, query } = parse(url, true);
  // const pathParts = pathname.split('/').filter(part => part !== '');

  // and then you can get the POST path url this way:
  // if (method === 'POST' && pathParts[0] === 'todos'){ ... } 
  

  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(doSomething());

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
  
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});