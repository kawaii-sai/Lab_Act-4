import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="card">
      <h2>Create Account</h2>

      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Register</button>

      <p>
        Already have an account? <Link to="/">Sign In</Link>
      </p>
    </div>
  );
}

export default SignUpPage;