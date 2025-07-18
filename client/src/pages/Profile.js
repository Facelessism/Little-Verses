import React from "react";
import { useParams } from "react-router-dom";

import '../styles/Profile.css';

function Profile() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Profile details for the user with ID: {id}</p>
    </div>
  );
}

export default Profile;
