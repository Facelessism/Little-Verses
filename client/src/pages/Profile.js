import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import '../styles/Profile.css';

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

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

  return (
    <div className="profile-container">
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
        </div>
      )}
    </div>
  );
}
export default Profile;
