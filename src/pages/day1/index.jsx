import React from "react";
import styles from "./index.module.css";
const Day1CssChallenges = () => {
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center">
      <div className={styles.outerContainer}>
        {" "}
        <div className={styles.container}>
          <div className={styles.number1}>
            <div className={styles.innernumber1}></div>
          </div>
          <div className={styles.number2}>
            <div className={styles.number2Inner}></div>
          </div>
          <div className={styles.number3}>
            <div className={styles.number3Inner}></div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.header}>DAYS</div>
          <p>CSS CHALLENGES</p>
        </div>
      </div>
    </div>
  );
};

export default Day1CssChallenges;
