import { Outlet, Link } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;