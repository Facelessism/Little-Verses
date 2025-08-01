import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import CreatePost from "./pages/CreatePost";
import Notifs from "./pages/Notifs";
import CategoryFilter from "./components/CategoryFilter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/profile/:id/edit" element={<EditProfile />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/notifications" element={<Notifs />} />
            <Route path="/categories" element={<CategoryFilter />} />
            <Route
              path="*"
              element={
                <h1 className="error-page">404!!! Page Not Found</h1>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
