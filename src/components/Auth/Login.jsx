import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1> This is the login page</h1>
      <p>
        <Link to="/">Go to Home</Link>
      </p>
      <p>
        <Link to="/about">Go to About</Link>
      </p>
    </div>
  );
};

export default Login;
