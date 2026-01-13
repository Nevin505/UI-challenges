import { useEffect, useRef, useState } from "react";
import styles from "./Day2CssChallenge.module.css";
const Day2CssChallenges = () => {
  const hamRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    hamRef.current;
  }, []);
  const clickHamBurger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <h1>Day2CssChallenge</h1>
      <div className={styles.container}>
        <div className={styles.hamburger}>
          <div
            id="line1"
            onClick={clickHamBurger}
            className={
              !isOpen ? styles.line1 : styles.line1 + " " + styles.line1Active
            }
          ></div>
          <div
            id="line2"
            // className={styles.line2}
            className={
              !isOpen ? styles.line2 : styles.line2 + " " + styles.line2Active
            }
            onClick={clickHamBurger}
          ></div>
          <div
            id="line3"
            onClick={clickHamBurger}
            className={
              !isOpen ? styles.line3 : styles.line3 + " " + styles.line3Active
            }
            // className={styles.line3}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Day2CssChallenges;
