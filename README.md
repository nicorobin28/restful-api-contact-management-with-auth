# 📇 Contact Management RESTful API with Authentication

This is a simple **RESTful API** project built with **Express.js** for managing contact data. It includes user **authentication** (register & login) to protect access to sensitive data.

## 🚀 Features

- User registration & login
- JSON Web Token (JWT)-based authentication
- CRUD operations on contact data:
  - Create a new contact
  - Read contact(s)
  - Update contact
  - Delete contact
- Input validation
- Middleware-based request handling
- Error handling
- Prisma ORM for database access

## 🧱 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL / MySQL / SQLite] (choose one)
- [JWT](https://jwt.io/)
- [Jest](https://jestjs.io/) for testing

## 📁 Project Structure

.
├── src/
│ ├── controller/
│ ├── middleware/
│ ├── model/
│ ├── route/
│ ├── validation/
│ └── application/
├── prisma/
│ └── schema.prisma
├── test/
├── README.md
└── package.json

## 🔐 Authentication

All protected routes require a valid JWT token in the `Authorization` header:

## 📦 Setup & Run

```bash
# Clone the repo
git clone https://github.com/your-username/restful-api-contact-management-with-auth.git

# Navigate into the project
cd restful-api-contact-management-with-auth

# Install dependencies
npm install

# Set up your environment variables
cp .env.example .env

# Run database migration (with Prisma)
npx prisma migrate dev

# Start the server
npm start


npm test

📌 Notes
Ensure your .env contains valid database and JWT configuration.

Secure endpoints require Authorization headers.

You can expand the project with user-specific contacts or group sharing.
```

👨‍💻 Author
Developed by Askar
