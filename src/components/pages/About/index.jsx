import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1> This is the about page</h1>

      <p>
        <Link to="/">Go to Home</Link>
      </p>
      <p>
        <Link to="/login">Go to Login</Link>
      </p>
    </div>
  );
};

export default About;
