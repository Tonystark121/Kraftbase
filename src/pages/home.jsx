import React from "react";
import styles from "../styles/home1.module.css";
import Card, { Card1, Card2, Card3 } from "../components/card";

const home = () => {
  return (
    <section style={{backgroundColor:'#fafaaf'}}>
      <div style={{ width: "95%", margin: "auto", padding:'2rem 0' }}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Design Weekly</h2>
            <p>A board to keep track of design process</p>
          </div>
          <div className={styles.board}>
            <div className={styles.board1}>
              <div className={styles.timeline}>Last week</div>
              <div className={styles.cards}>
                <Card />
                <Card1 />
              </div>
            </div>
            <div className={styles.board1}>
              <div className={styles.timeline}>This week</div>
              <div className={styles.cards}>
                <Card2 />
              </div>
            </div>
            <div className={styles.board1}>
              <div className={styles.timeline}>Last week</div>
              <div className={styles.cards}>
                <Card3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default home;
