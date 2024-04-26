import React from 'react'
import styles from './card.module.css'
import user from '../../assets/profile.jpeg'
export default function Card() {
    return (
        <div className={styles.card}>
            <img src={user} />
            <div>
                <h2>Makinde Olaitan</h2>
                <h3>FULLSTACK Developer</h3>
                <p>
                    Dynamic and motivated entry level MERN web Developer with strong
                    foundation in web development technologies. Demonstrated proficiency
                    in building user-friendly websites using modern frameworks and
                    tools. Seeking a challenging role in a start-up environment where I
                    can leverage my technical expertise to drive innovation and deliver
                    exceptional user experiences.
                </p>
                <button>Download CV</button>
            </div>
        </div>
    )
}
