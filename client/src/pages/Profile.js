import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";

import '../styles/Profile.css';

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const dummyPosts = [
    { id: 1, title: "First Blog", content: "Hey, this is my first blog!!!", author: "Facelessism" },
    { id: 2, title: "React Tips", content: "Learning hooks is thrilling!!!", author: "Facelessism" },
    { id: 3, title: "AI Autonotes", content: "I'm working on a new project!", author: "SomeoneElse" },
  ];


  useEffect(() => {
    const fetchUser = async () => {
      const dummyUser = {
        name: "Facelessism",
        bio: "Tech Geek & Blogger",
        avatar: null,
      };
      setUser(dummyUser);
    };
    fetchUser();
  }, [id]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img
            src="https://via.placeholder.com/120"
            alt="User Avatar"
            style={{ borderRadius: "50%", width: "100%", height: "100%" }}
          />
        </div>
        {user && (
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <button className="edit-btn">Edit Profile</button>
          </div>
        )}
      </div>
      <div className="profile-posts">
        <h3>{user?.name}'s Posts</h3>
        <div className="posts-grid">
          {dummyPosts
            .filter((post) => post.author === user?.name)
            .map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
