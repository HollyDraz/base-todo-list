# To-Do List API - Base Project

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)

Created by **Fabricio Braga**  
Last update: **Tue 1 Apr 2025**

## Project Description

This is a reference base project for students of **Hack the Gap** company, **Course 6: Developing Back-End Apps with Node.js and Express**. It provides a foundation for building a To-Do List API with Node.js HTTP server, demonstrating:

- Basic server setup
- REST API principles
- In-memory data management
- Modular code organization
- Request handling

## Features

- CRUD operations for todo items
- JSON API responses
- Error handling
- Sample data seeding
- Clean code structure

## Project Structure

```
todo-list-api/
├── models/
│   └── TodoList.js    # TodoList class implementation
├── server.js          # Main server file
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hackthegap/base-todo-list.git
   cd base-todo-list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`

## API Endpoints

| Method | Endpoint       | Description                     |
|--------|---------------|---------------------------------|
| GET    | /todos        | Get all todo items              |
| GET    | /todos/:id    | Get a specific todo item        |
| POST   | /todos        | Create a new todo item          |

## Example Requests

**Get all todos:**
```bash
curl http://localhost:3000/todos
```

**Get specific todo:**
```bash
curl http://localhost:3000/todos/1
```

**Create new todo:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"task":"Learn Express"}' http://localhost:3000/todos
```


## Next Steps for Students

1. Implement the remaining CRUD operations (PUT/PATCH, DELETE)




2. Add data persistence (file system or database)
3. Implement Express.js version
4. Add input validation
5. Create frontend interface

---

**Happy Coding!** 🚀