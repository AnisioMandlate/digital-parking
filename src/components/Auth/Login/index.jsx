import { Link } from "react-router-dom";

// Styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles["form-container"]}>
      <h1>
        Account <span className={styles["text-primary"]}>Login</span>
      </h1>
      <form className={styles.form}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            // value={email}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className={styles["submit-button"]}
        />
      </form>
      <div className={styles["footer"]}>
        <p className={styles["footer-text"]}>Forgot password</p>
        <p>or</p>
        <Link to="/register" className={styles["footer-text"]}>
          Register with us
        </Link>
      </div>
    </div>
  );
};

export default Login;
