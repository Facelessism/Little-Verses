import React from "react";

import '../styles/Notifs.css';

const dummyNotifications = [
  {
    id: 1,
    message: "Anisha commented on your post 'Three Lessons'",
    time: "2h ago",
    read: false,
  },
  {
    id: 2,
    message: "Rahul liked your post 'Workplace Productivity'",
    time: "5h ago",
    read: true,
  },
];

function Notifications() {
  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      <ul className="notification-list">
        {dummyNotifications.map((note) => (
          <li
            key={note.id}
            className={`notification-item ${note.read ? "read" : "unread"}`}
          >
            <p>{note.message}</p>
            <span className="time">{note.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifs;
