import React from 'react'
import styles from './contact.module.css'


import { Link } from 'react-router-dom'

import { contactOptions } from '../../utils';
import ContactMe from '../../components/contact-me/Email';
export default function ContactUS() {
    const handleOptionClick = (link) => {
        window.location.href = link;
    };

    return (
        <>
            <section className={styles.contact}>
                <h1>
                    Lets Connect
                </h1>
                <p>Thank you for your interest in getting in touch with me.I welcome your feedback, questions, and suggestions. If you have any specific question or comment feel free to contact via the provided channels below.</p>
                <div className={styles.contactUs}>
                    <ul className={styles.social_connection}>
                        {
                            contactOptions.map((contact, index) => {
                                return (
                                    <Link onClick={() => handleOptionClick(option.link)} key={index} to={contact.link} className={styles.social_List}>
                                        <img src={contact.image} alt="" />
                                        <span>{contact.label}</span>
                                    </Link>
                                )
                            })
                        }

                    </ul>
                    <div className={styles.email}>
                        <ContactMe />
                    </div>
                </div>
            </section>
        </>
    )
}
