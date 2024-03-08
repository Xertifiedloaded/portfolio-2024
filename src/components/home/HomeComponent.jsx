import React from "react";
import styles from "./home.module.css";
import Progress from "../progress/Progress";
import { Link } from "react-router-dom";
export default function HomeComponent() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.port}>
          <h1 className={styles.home}>
            Hey! I'm Makinde Olaitan 👋
          </h1>
          <h3>Frontend, Backend, UIUX</h3>
          <div className={styles.cv}>
            <Link target="_blank" to="https://pdf.ac/ZLX0r">
              <button>
                Download Cv
              </button>
            </Link>
          </div>
          <p>
            Dynamic and motivated entry level MERN web Developer with strong
            foundation in web development technologies. Demonstrated proficiency
            in building user-friendly websites using modern frameworks and
            tools. Seeking a challenging role in a start-up environment where I
            can leverage my technical expertise to drive innovation and deliver
            exceptional user experiences.
          </p>


        
          <Progress />
        </div>
      </div>
    </>
  );
}


