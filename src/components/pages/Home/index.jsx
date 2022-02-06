import { Link } from "react-router-dom";

// Styles
import styles from "./Home.module.css";

import mapImg from "../../../assets/map.jpeg";
const Home = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>Hi, User!</li>
            <Link to="/login">
              <button className={styles["header-button"]}>Logout</button>
            </Link>
          </ul>
        </nav>
      </header>
      <div className={styles.container}>
        <h1>Welcome to Digital Parking system</h1>
        <div className={styles.content}>
          <p>My current location</p>
          <div className={styles["map-container"]}>
            <img src={mapImg} alt="Map of Ahmedabad" />
          </div>
        </div>

        <div className={styles["previous-location"]}>
          <p>Previous parking locations</p>
          <div className={styles["previous-location_map"]}>
            <div className={styles["previous-location_div"]}>
              <img src={mapImg} alt="Map of Ahmedabad" />
            </div>
            <div className={styles["previous-location_div"]}>
              <img src={mapImg} alt="Map of Ahmedabad" />
            </div>
            <div className={styles["previous-location_div"]}>
              <img src={mapImg} alt="Map of Ahmedabad" />
            </div>
            <div className={styles["previous-location_div"]}>
              <img src={mapImg} alt="Map of Ahmedabad" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
