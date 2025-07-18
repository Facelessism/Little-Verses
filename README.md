### Little Verses- My Blogging App
trying to build a bloging app

### Project Structure

 blog-platform/
│
├── backend/
│ ├── src/
│ │ ├── controllers/ # Logic for handling requests
│ │ ├── models/ # Mongoose (or ORM) models
│ │ ├── routes/ # Express route files for API endpoints
│ │ ├── middleware/ # Auth, error handling etc
│ │ ├── utils/ # Helper functions & utilities
│ │ ├── config/ # DB config, environment variables
│ │ └── app.js # Main Express app
│ ├── tests/ # Backend tests
│ ├── .env
│ ├── package.json
│ └── README.md
│
├── frontend/
│ ├── public/ # Static files 
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Page components (Home, PostDetails, Profile, Login, Register, Notifications)
│ │ ├── hooks/ # Custom React hooks
│ │ ├── api/ # API call functions (axios)
│ │ ├── utils/ # Frontend-specific helpers (date formatting, etc.)
│ │ ├── styles/ # styled-components
│ │ ├── App.js
│ │ └── index.js
│ ├── .env
│ ├── package.json
│ └── README.md
├── .gitignore
└── README.md
