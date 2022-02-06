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
          <label htmlFor="email">Name</label>
          <input
            type="text"
            name="name"
            // value={email}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="password">Phone number</label>
          <input
            type="text"
            name="phone-number"
            pattern="[0-9]+"
            // value={password}
            // onChange={onChange}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="password">Username</label>
          <input
            type="text"
            name="username"
            // value={password}
            // onChange={onChange}
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
          value="Register"
          className={styles["submit-button"]}
        />
      </form>
    </div>
  );
};

export default Register;
