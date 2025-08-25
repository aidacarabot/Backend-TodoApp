# Backend TodoApp 📝

This project is the backend for a ToDo-App, developed with Node.js, Express, TypeScript, Prisma, and MySQL. 🚀

> **Note:** ℹ️ For this project, we use a public MySQL database provided by [filess.io](https://filess.io/). This is suitable for development, testing, and learning purposes, but not recommended for production environments.

## What does this database do? 📦

It manages tasks (to-dos), allowing you to create, read, update, and delete tasks through a REST API. It uses Prisma as an ORM to interact with a MySQL database.

## Main Endpoints 🔗

- `GET /tasks` — Get all tasks.
- `GET /tasks/:id` — Get a task by its ID.
- `POST /tasks` — Create a new task. Requires a JSON object with the task data.
- `PUT /tasks/:id` — Update an existing task by ID.
- `DELETE /tasks/:id` — Delete a task by ID.

## How it works ⚙️

1. The backend exposes a REST API to manage tasks.
2. It uses Prisma to map the data model and perform operations on the MySQL database.
3. The source code is written in TypeScript and compiled to JavaScript for production.
4. Deployment is automated on Render.

## Deployment 🌐

The backend is deployed and publicly accessible at:

➡️ https://todo-app-l32q.onrender.com/

## Local Installation 💻

1. Clone the repository and enter the project folder.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with your MySQL connection string:
   ```
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
   ```
4. Sync the database:
   ```sh
   npx prisma db push
   ```
5. Build the project:
   ```sh
   npm run build
   ```
6. Start the server:
   ```sh
   npm start
   ```

## License 📄

MIT ©

---

Developed by Aida Carabot 👩‍💻
# Backend-TodoApp
