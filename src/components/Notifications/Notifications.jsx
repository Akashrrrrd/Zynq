import React, { useState, useEffect } from "react";
import { Bell, CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react";
import "./Notifications.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Notification type icons mapping
  const notificationIcons = {
    info: <Info className="notification-type-icon info" />,
    success: <CheckCircle className="notification-type-icon success" />,
    alert: <AlertTriangle className="notification-type-icon alert" />,
    warning: <XCircle className="notification-type-icon warning" />,
  };

  useEffect(() => {
    const fetchNotifications = () => {
      const data = [
        {
          id: 1,
          type: "info",
          message: "Your profile has been updated successfully.",
          timestamp: "2 minutes ago",
          read: false,
        },
        {
          id: 2,
          type: "alert",
          message: "Your subscription is about to expire. Renew now!",
          timestamp: "1 hour ago",
          read: false,
        },
        {
          id: 3,
          type: "success",
          message: "You've gained 50 new followers this week!",
          timestamp: "1 day ago",
          read: false,
        },
        {
          id: 4,
          type: "warning",
          message: "Password reset recommended for better security.",
          timestamp: "2 days ago",
          read: false,
        },
        {
          id: 5,
          type: "alert",
          message: "Server maintenance scheduled for tomorrow.",
          timestamp: "3 days ago",
          read: false,
        },
      ];
      setNotifications(data);
      setUnreadCount(data.filter((n) => !n.read).length);
    };

    fetchNotifications();
  }, []);

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
    setUnreadCount(updatedNotifications.filter((n) => !n.read).length);
  };

  return (
    <div className="notifications-container">
      <header className="notifications-header">
        <div className="header-content">
          <h2>Notifications</h2>
          <div className="notification-badge">
            <Bell className="notifications-icon" />
            {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
          </div>
        </div>
      </header>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${notification.type} ${
              notification.read ? "read" : "unread"
            }`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="notification-content">
              {notificationIcons[notification.type]}
              <div className="notification-text">
                <p className="notification-message">{notification.message}</p>
                <span className="notification-timestamp">
                  {notification.timestamp}
                </span>
              </div>
            </div>
            {!notification.read && <div className="unread-indicator"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
