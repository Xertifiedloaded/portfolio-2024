import React from 'react'

export default function Footer() {
    const getFullYear = new Date().getFullYear()
    return (
        <div style={{textAlign:"center"}}>Makinde Olaitan's Portfolio {getFullYear}</div>
    )
}
