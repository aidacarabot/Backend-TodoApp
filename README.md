# Backend TodoApp 📝

This is the backend for a ToDo-App, built with Node.js, Express, TypeScript, Prisma, and MySQL. 🚀

> **Note:** ℹ️ This project uses a public MySQL database provided by [filess.io](https://filess.io/) for development, testing, and learning purposes. Not recommended for production.

---

## Features

- Manage tasks (to-dos) with create, read, update, and delete operations via a REST API
- Uses Prisma ORM for database access
- Written in TypeScript
- Automated deployment on Render

## Main Endpoints 🔗

- `GET /tasks` — Get all tasks
- `GET /tasks/:id` — Get a task by its ID
- `POST /tasks` — Create a new task (JSON body)
- `PUT /tasks/:id` — Update a task by ID
- `DELETE /tasks/:id` — Delete a task by ID

---

## How to use this backend with the Frontend

You can use the public backend deployed at:

    https://backend-todoapp-j408.onrender.com

However, this public server may be slower or have usage limits. For better performance, you can run the backend locally.

### Using the backend locally with the frontend

1. Clone and run this backend project locally:

   ```sh
   git clone https://github.com/aidacarabot/Backend-TodoApp
   cd Backend-TodoApp
   npm install
   npm run dev
   ```

   The local server will usually run at `http://localhost:3000` (or the port you configure).

2. In your frontend project ([Frontend-TodoApp](https://github.com/aidacarabot/Frontend-TodoApp)), open the file `src/api/taskApi.ts`.

3. Change the following line:

   ```js
   const BASE_URL = 'https://backend-todoapp-j408.onrender.com'
   ```

   to:

   ```js
   const BASE_URL = 'http://localhost:3000'
   ```

4. Save the file and run the frontend as usual. Now your frontend will use your local backend.

To switch back to the public backend, just change the `BASE_URL` back to the Render URL.

---

## Deployment 🌐

The backend is also deployed and publicly accessible at:

➡️ https://todo-app-l32q.onrender.com/

---

## Local Installation 💻

1. Clone the repository and enter the project folder:
   ```sh
   git clone https://github.com/aidacarabot/Backend-TodoApp
   cd Backend-TodoApp
   npm install
   ```
2. Create a `.env` file with your MySQL connection string:
   ```
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
   ```
3. Sync the database:
   ```sh
   npx prisma db push
   ```
4. Build the project:
   ```sh
   npm run build
   ```
5. Start the server:
   ```sh
   npm start
   ```

---

## License 📄

MIT ©

---

Developed by Aida Carabot 👩‍💻
