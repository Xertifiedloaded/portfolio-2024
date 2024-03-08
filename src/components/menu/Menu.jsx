import React from "react";
import styles from "./menu.module.css";
import user from "../../assets/image.jpeg";
import { data } from "../../utils";
import { Link } from "react-router-dom";

import x from '../../assets/x.svg'
export default function Menu({ toggleMenu, menuOpen,isDesktop }) {
  return (
    <>
      <main className={styles.main}>
      {isDesktop ? null : <div className={styles.headerImg} onClick={toggleMenu}>{menuOpen ? <img src={x} alt="" /> : null}</div>}
        <div className={styles.user}>
          <img src={user} alt="ola" />
        </div>
        <div className={styles.itemMenu}>
          {data.map((items) => {
            return (
          
                <Link  target="_blank" onClick={toggleMenu} to={items.path} key={items.id} className={styles.item}>
                  <img src={items.image} alt="" />
                  <span>{items.name}</span>
                </Link>
          
            );
          })}
        </div>
      </main>
    </>
  );
}
