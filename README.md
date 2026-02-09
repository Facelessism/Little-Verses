# Little Verses- My Blogging App

Little Verses is a full-stack blogging platform built to experiment with modern web technologies while creating a clean and expressive space for writing and sharing ideas.

---

## Features

- Create, read, update and delete blog posts
- User authentication (Register / Login)
- Secure REST APIs with middleware-based authentication
- User interactions: likes, comments, notifications
- Responsive and reusable frontend components

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- RESTful API architecture

### Frontend
- React.js
- Axios for API calls
- Styled Components
- Custom React Hooks

---

## Project Structure

```text
blog-platform/
│
├── backend/
│   ├── src/
│   │   ├── controllers/   # Logic for handling requests
│   │   ├── models/        # Database models
│   │   ├── routes/        # Express API routes
│   │   ├── middleware/   # Auth, error handling, etc.
│   │   ├── utils/         # Helper utilities
│   │   ├── config/        # DB & environment configuration
│   │   └── app.js         # Main Express app
│   ├── tests/             # Backend tests
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   │   ├── Home
│   │   │   ├── PostDetails
│   │   │   ├── Profile
│   │   │   ├── Login
│   │   │   ├── Register
│   │   │   └── Notifications
│   │   ├── hooks/         # Custom React hooks
│   │   ├── api/           # API call functions
│   │   ├── utils/         # Frontend helpers
│   │   ├── styles/        # Styled Components
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README.md
```

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/Little-Verses.git
cd Little-Verses
```
### Backend setup

```bash
cd backend
npm install
npm run dev
```

### Create .env file

```bash
echo "PORT=5000" >> .env
echo "MONGO_URI=your_database_url" >> .env
echo "JWT_SECRET=your_secret_key" >> .env
```

### Frontend setup

```bash
cd ../frontend
npm install
npm start
```
## Testing

### Run backend tests

```bash
cd backend
npm test

```
- Backend tests are located in backend/tests
- Additional tests will be added as features are implemented

## Project Status

Under active development
- Contributions and feedback are welcome
- Open issues or submit pull requests for improvement
























