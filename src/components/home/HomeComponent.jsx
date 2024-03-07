import React from "react";
import styles from "./home.module.css";
import Progress from "../progress/Progress";
export default function HomeComponent() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.port}>
          <h1>
            I'm Makinde Olaitan, a MERN software Developer from Abeokuta
            Nigeria.
          </h1>
          
          <p>
            Dynamic and motivated entry level frontend web Developer with strong
            foundation in web development technologies. Demonstrated proficiency
            in building user-friendly websites using modern frameworks and
            tools. Seeking a challenging role in a start-up environment where I
            can leverage my technical expertise to drive innovation and deliver
            exceptional user experiences.
          </p>
          <Progress/>
        </div>
      </div>
    </>
  );
}
