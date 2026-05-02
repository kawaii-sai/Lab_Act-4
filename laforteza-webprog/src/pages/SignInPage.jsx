import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div className="card">
      <h2>Welcome Back</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignInPage;