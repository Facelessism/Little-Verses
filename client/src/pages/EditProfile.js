import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import '../styles/EditProfile.css';

function EditProfile() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    bio: ""
  });

  useEffect(() => {
    const fetchUser = async () => {
      const dummyUser = {
        name: "Facelessism",
        bio: "Tech Geek & Blogger",
      };
      setFormData(dummyUser);
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} />

        <label>Bio:</label>
        <textarea name="bio" rows={4} value={formData.bio} onChange={handleChange} />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;
