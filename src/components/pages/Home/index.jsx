import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> This is the home page</h1>
      <p>
        <Link to="/login">Go to Login</Link>
      </p>
      <p>
        <Link to="/about">Go to About</Link>
      </p>
    </div>
  );
};

export default Home;
