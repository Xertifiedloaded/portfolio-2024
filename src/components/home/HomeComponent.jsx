import React from "react";
import styles from "./home.module.css";
import Progress from "../progress/Progress";
import { Link } from "react-router-dom";
import MyMenu from "../menus/MyMenu";
import user from '../../assets/profile.jpeg'
import Card from "../card2/Card";
export default function HomeComponent() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.port}>

          <Card />




          <Progress />
        </div>

      </div>
    </>
  );
}


