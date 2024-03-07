import React from 'react'

export default function Nav({ toggleMenu, menuOpen,isDesktop }) {
  return (
 <>
       {isDesktop ? null : <button onClick={toggleMenu}>{menuOpen ? "Hide Menu" : "Show Menu"}</button>}
       <p>Nav</p>
 </>
  )
}
