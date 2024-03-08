import React from 'react'

export default function Footer() {
    const getFullYear = new Date().getFullYear()
    return (
        <div style={{textAlign:"center",marginBottom:"30px"}}>Makinde Olaitan's Portfolio {getFullYear}</div>
    )
}
