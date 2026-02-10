# Little Verses- My Blogging App

Little Verses is a lightweight, developer-focused blogging platform designed for sharing ideas and code snippets without media clutter. It combines the full MERN stack with modern UX and robust moderation features for a clean, expressive writing experience.

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
---

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


## Progress Roadmap

### Phase 1 – Core MVP
- [ ] User Authentication (Register/Login) with JWT  
- [ ] CRUD operations for blog posts  
- [ ] Responsive frontend with React components  
- [ ] Secure REST APIs with middleware-based authentication  

### Phase 2 – User Interaction Enhancements
- [ ] Likes and Comments on posts (flat, non-threaded)  
- [ ] Notifications for interactions (new comments, likes)  
- [ ] Profile customization (avatar, bio, settings)  

### Phase 3 – Advanced Features
- [ ] *Search & Filter Posts:* 
  - [ ] Latest Posts (newest first)  
  - [ ] Most Commented / Viewed Posts  
  - [ ] Filter by Tags  
  - [ ] Search by Keywords or Username  

- [ ] *Code Snippet Support:* 
  - [ ] Embed formatted code blocks in posts  
  - [ ] Syntax highlighting for popular languages (JS, Python, etc.)  
  - [ ] No images/videos—lightweight, developer-friendly  

- [ ] Drafts and Scheduled Posts  
- [ ] Rich Text Editor (text + code)  
- [ ] Pagination / Infinite Scroll for smooth UX  

### Phase 4 – Performance & Security
- [ ] *Rate Limiting / Spam Detection:*  
  - [ ] Prevent excessive requests or submissions  
  - [ ] Detect and block spammy posts or comments  

- [ ] *Content Moderation:*
  - [ ] Filter vulgar, hateful, or toxic words in posts/comments  
  - [ ] Optional admin override for flagged content  

- [ ] *Frontend & Backend Optimization:* 
  - [ ] Lazy loading for posts and components  
  - [ ] Backend caching (Redis/Memcached) for faster API responses  

### Upcoming phases to be updated soon !!!

## Project Status
Under active development
- Contributions and feedback are welcome
- Open issues or submit pull requests for introducing improvement
