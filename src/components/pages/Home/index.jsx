import { Link } from "react-router-dom";

// Styles
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>Hi, User!</li>
            <button className={styles["header-button"]}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </ul>
        </nav>
      </header>
      <div className={styles.container}>
        <h1>Welcome to Digital Parking system</h1>
        <p>
          <Link to="/login">Go to Login</Link>
        </p>
        <p>
          <Link to="/about">Go to About</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
