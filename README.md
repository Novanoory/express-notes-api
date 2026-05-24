# express-notes-api
Simple Notes API built with Express.js for practicing routing and backend API fundamentals.

## Features

- Get all notes
- Get a single note by ID
- Create a new note
- Delete a note
- JSON request and response handling
- Beginner-friendly backend project

---

## Tech Stack

- Node.js
- Express.js

---

## Project Structure

```text
express-notes-api/
│
├── index.js
├── data.js
├── package.json
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/express-notes-api.git
```

### 2. Move into project folder

```bash
cd express-notes-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run server

```bash
node index.js
```

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/` | Home route |
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get single note |
| POST | `/notes` | Create a new note |
| DELETE | `/notes/:id` | Delete a note |

---

## Example Request

### Create Note

```http
POST /notes
```

### JSON Body

```json
{
  "title": "Backend Practice",
  "content": "Learning Express APIs"
}
```

---

## Testing

You can test the API using:

- Thunder Client
- Postman
- Browser (GET requests)

---

## Learning Outcomes

This project helps in understanding:

- Express.js basics
- REST APIs
- Routing
- Request & response handling
- Route parameters
- Working with arrays as temporary data storage

---

## Author

Made for backend practice using Express.js.
