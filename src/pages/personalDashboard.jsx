import React from "react";
import styles from "../styles/personl.module.css";
import card, {Card2, Card3, Card1, Card5, Card4, Card6, Card7} from "../components/card";

const personalDashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Personal</h2>
        <p>A board to keep track of Personal Tasks</p>
      </div>
      <div className={styles.board}>
            <div className={styles.board1}>
              <div className={styles.timeline}>Not Started</div>
              <div className={styles.card}>
                 <Card4 />
              </div>
            </div>
            <div className={styles.board1}>
              <div className={styles.timeline}>In Progress</div>
              <div className={styles.card}>
                 <Card5 />
              </div>
            </div>
            <div className={styles.board1}>
              <div className={styles.timeline}>Blocked</div>
              <div className={styles.card}>
                 <Card6 />
              </div>
            </div>
            <div className={styles.board1}>
              <div className={styles.timeline}>Done</div>
              <div className={styles.card}>
                 <Card7 />
              </div>
            </div>
          </div>
    </div>
  );
};

export default personalDashboard;
