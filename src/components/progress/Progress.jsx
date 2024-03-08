

import styles from "./rogress.module.css";

const Progress = () => {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.skills}>Skills</h1>
        <div className={styles.skillBox}>
          <span className={styles.title}>Node.js</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.nodejs}`}>
              <span className={styles.toolTip}>80%</span>
            </span>
          </div>
        </div>
        <div className={styles.skillBox}>
          <span className={styles.title}>PostgreSQL</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.postgresql}`}>
              <span className={styles.toolTip}>80%</span>
            </span>
          </div>
        </div>
        <div className={styles.skillBox}>
          <span className={styles.title}>MongoDB</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.mongodb}`}>
              <span className={styles.toolTip}>80%</span>
            </span>
          </div>
        </div>
        <div className={styles.skillBox}>
          <span className={styles.title}>React.js</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.react}`}>
              <span className={styles.toolTip}>90%</span>
            </span>
          </div>
        </div>
        <div className={styles.skillBox}>
          <span className={styles.title}>Nextj.js</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.nextjs}`}>
              <span className={styles.toolTip}>90%</span>
            </span>
          </div>
        </div>
        <div className={styles.skillBox}>
          <span className={styles.title}>Vanillajs</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.vanillajs}`}>
              <span className={styles.toolTip}>85%</span>
            </span>
          </div>
        </div>
        <div className={styles.skillBox}>
          <span className={styles.title}>Html</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.html}`}>
              <span className={styles.toolTip}>95%</span>
            </span>
          </div>
        </div>
        <div className={styles.skillBox}>
          <span className={styles.title}>CSS</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.css}`}>
              <span className={styles.toolTip}>95%</span>
            </span>
          </div>
        </div>
        <div className={styles.skillBox}>
          <span className={styles.title}>Github/Gitlab</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.github}`}>
              <span className={styles.toolTip}>90%</span>
            </span>
          </div>
        </div>
        <div className={styles.skillBox}>
          <span className={styles.title}>Vercel/Netlify</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPercent} ${styles.vercel}`}>
              <span className={styles.toolTip}>90%</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;

