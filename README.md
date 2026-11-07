# API-VP

A Student Management System REST API built with Node.js and Express.

## Features

- Create, read, update and delete (CRUD) operations for students
- JSON request and response format
- Separate route and controller files for clean code structure

## Technologies Used

- Node.js
- Express
- npm for dependency management

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/23jk1a4409-cloud/API-VP.git
   cd API-VP
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /                  | Welcome message |
| GET    | /api/students      | Get all students |
| GET    | /api/students/:id  | Get one student by id |
| POST   | /api/students      | Add a new student |
| PUT    | /api/students/:id  | Update a student |
| DELETE | /api/students/:id  | Delete a student |

## Student Data Format

Each student has these fields:

```json
{
  "id": 1,
  "name": "adam",
  "age": 100
}
```

### Example: add a student (POST /api/students)

```json
{
  "name": "john",
  "age": 20
}
```

## Author

[Ganga Bhavani](https://github.com/23jk1a4409-cloud)
