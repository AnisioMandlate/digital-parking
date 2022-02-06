import { Link } from "react-router-dom";

// Styles
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles["form-container"]}>
      <h1>
        Account <span className={styles["text-primary"]}>Register</span>
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
        <div className={styles["form-group"]}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className={styles["submit-button"]}
        />
      </form>
    </div>
  );
};

export default Register;
