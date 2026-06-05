import React from "react";
import "./Dashboard.css";

const users = [
  {
    id: 1,
    name: "Cristina Joy",
    username: "cristinajoy",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Keiji Kuwabara",
    username: "keijikuwabara",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 3,
    name: "Jordan Poole",
    username: "jordanpoole",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Mika Lim",
    username: "mikalim",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 5,
    name: "Xavier Lee",
    username: "xavierlee",
    role: "Editor",
    status: "Inactive",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="topbar">
        <div className="logo">☰ Users</div>

        <div className="topbar-right">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
          />
          <button className="logout-btn">LOGOUT</button>
        </div>
      </header>

      <div className="content-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="menu-item">🏠</div>
          <div className="menu-item">📄</div>
          <div className="menu-item active">👥</div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="title-section">
            <h2>Users</h2>
            <button className="add-user-btn">ADD USER</button>
          </div>

          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Username</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>

                  <td>
                    <span
                      className={
                        user.status === "Active"
                          ? "status active"
                          : "status inactive"
                      }
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>
                    <button className="edit-btn">EDIT</button>

                    {user.status === "Active" ? (
                      <button className="disable-btn">DISABLE</button>
                    ) : (
                      <button className="activate-btn">ACTIVATE</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;