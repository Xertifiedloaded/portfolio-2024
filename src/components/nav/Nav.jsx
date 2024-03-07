import React from 'react'
import hamburger from '../../assets/hamburger.svg'
import styles from './nav.module.css'
export default function Nav({ toggleMenu, menuOpen, isDesktop }) {
  return (
    <>
      <nav >

        {isDesktop ? null : <div  onClick={toggleMenu}>{menuOpen ? null : <img  src={hamburger} alt="" />}</div>}
      </nav>

    </>
  )
}
