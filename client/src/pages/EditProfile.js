import React from "react";
import { useParams } from "react-router-dom";

import '../styles/EditProfile.css';

function EditProfile() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Profile</h1>
      <p>Edit the profile for user ID: {id}</p>
    </div>
  );
}

export default EditProfile;
