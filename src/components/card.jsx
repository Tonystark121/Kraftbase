import React from "react";
import styles from "../styles/card.module.css";

export const Card7 = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.card_title}>Nothing to be done😎</h1>
      <div className={styles.box}>
         <img src="./assets/img.png" alt="bg" />
      </div>
    </div>
  )
}

export const Card6 = () => {
  const taskList = [
    'Request moving estimate',
    'order moving boxes'
  ]
  return (
    <div className={styles.card}>
      <div className={styles.profiles}>
        <div className={styles.profile}>
          <img src="./assets/react.svg" alt="" />
        </div>
      </div>
      <h1 className={styles.card_title}>Move</h1>
      <div className={styles.body}>
        <p>
          Survive moving place in the pandemic. 
        </p>
        {taskList?.map((items, idx) => (
          <div className={styles.list} key={idx}>
            <div className={styles.box}>
              <div></div>
            </div>
            <p>{items}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Card5 = () => {
  const taskList = [
    "Accountant contract",
    "Request work payslips",
    "Cancel VAT ID",
  ];
  return (
    <div className={styles.card}>
      <h1 className={styles.card_title}>Taxes 😊</h1>
      <div className={styles.body}>
        {taskList?.map((items, idx) => (
          <div className={styles.list} key={idx}>
            <div className={styles.box}>
              <div></div>
            </div>
            <p>{items}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.card_title}>Take Coco to a vet</h1>
      <div className={styles.label}>Due 4/11</div>
    </div>
  );
};

export const Card3 = () => {
  const taskList = [
    "Schedule Time",
    "set up a Figma board",
    "Review exercises with the team",
  ];
  return (
    <div className={styles.card}>
      <div className={styles.profiles}>
        <div className={styles.profile}>
          <img src="./assets/react.svg" alt="" />
        </div>
        <div className={styles.profile}>
          <img src="./assets/react.svg" alt="" />
        </div>
      </div>
      <h1 className={styles.card_title}>Cultural Workshop</h1>
      <div className={styles.body}>
        <p>Let's build a great team.</p>
        {taskList?.map((items, idx) => (
          <div className={styles.list} key={idx}>
            <div className={styles.box}>
              <div></div>
            </div>
            <p style={idx === 0 ? { textDecoration: "line-through" } : {}}>
              {items}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.label}>Due 24/11</div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.profiles}>
        <div className={styles.profile}>
          <img src="./assets/react.svg" alt="" />
        </div>
        <div className={styles.profile}>
          <img src="./assets/react.svg" alt="" />
        </div>
      </div>
      <h1 className={styles.card_title}>Usability Test</h1>
      <div className={styles.body}>
        <p>Reasearch question from Rajeev</p>
      </div>
      <div className={styles.label1}>Research</div>
    </div>
  );
};

export const Card1 = () => {
  const taskList = [
    "Schedule Time",
    "set up a Figma board",
    "Share a meeting link",
  ];
  return (
    <div className={styles.card}>
      <h1 className={styles.card_title}>Team Avengers</h1>
      <div className={styles.lists}>
        {taskList?.map((items, idx) => (
          <div className={styles.list} key={idx}>
            <div className={styles.box}>
              <div></div>
            </div>
            <p style={idx === 0 ? { textDecoration: "line-through" } : {}}>
              {items}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const card = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.card_title}>Review Scope</h1>
      <div className={styles.body}>
        <p>
          Review <span>#390.</span>
        </p>
      </div>
      <div className={styles.label}>Due 4/11</div>
    </div>
  );
};

export default card;
