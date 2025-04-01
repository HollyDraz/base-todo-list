import http from 'http';
import { doSomething } from './my_modules/customModule.js'
//#1 import todo list so i can see the list 
import { TodoList } from './models/TodoList.js';

// #2 create an instance of the TodoList class
const todoList = new TodoList(); 

//testing to see if my get is working
// #3 add a todo item to the list
todoList.add('Learn Node.js');
todoList.add('Build a REST API');
todoList.add('walk my dog, Dash :)');


const server = http.createServer((req, res) => {
  // #4 Handle incoming requests
  // #4.1 Get the request method and URL
  const { method, url } = req;

  //get the path and query string
  if (method === 'GET' && url === '/todos') {
    // #5 Return the list of todos in JSON format
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todoList.getAll()));






   
// #6 Handle adding a new todo item
  // } else if (method === 'POST' && url === '/todos') {
  //   //handle the post request 
  //   let body ='';
  //   req.on('data', (chunk) => {
  //     body += chunk.toString();//collects the data
  //   });
  //   req.on('end',() => {
  //     try{
  //       const { task } = JSON.parse(body); //parse the body
  //       if(!task){
  //     res.writeHead(400, { 'Content-Type': 'application/json' });
  //     return res.end(JSON.stringify({ error: 'Task is required' }));
  //       }
  //     }



  //landing code
 

} else if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(doSomething());
//error catcher
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
  
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});




  // // uncomment this, if you want to get parameters from the GET method:
  // const [path, queryString] = req.url.split('?');
  // const params = new URLSearchParams(queryString);

  // // And then, you can get parameters by name, like this:
  // const name = params.get('name') || 'Guest';
  // const country = params.get('country') || 'Somewhere';
  // console.log(name);



  // uncomment this, if you want to get the pathparameters from the post:
  // const { method, url } = req;
  // const { pathname, query } = parse(url, true);
  // const pathParts = pathname.split('/').filter(part => part !== '');

  // and then you can get the POST path url this way:
  // if (method === 'POST' && pathParts[0] === 'todos'){ ... } 



