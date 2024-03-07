import React from "react";
import styles from "./menu.module.css";
import user from "../../assets/user.svg";
import { data } from "../../utils";
import { Link } from "react-router-dom";
export default function Menu({ toggleMenu, menuOpen,isDesktop }) {
  return (
    <>
      <main className={styles.main}>
      {isDesktop ? null : <button onClick={toggleMenu}>{menuOpen ? "Hide Menu" : "Show Menu"}</button>}
        <div className={styles.user}>
          <img src={user} alt="ola" />
        </div>
        <div className={styles.itemMenu}>
          {data.map((items) => {
            return (
              <>
                <Link to={items.path} key={items.id} className={styles.item}>
                  <img src={items.image} alt="" />
                  <span>{items.name}</span>
                </Link>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}
