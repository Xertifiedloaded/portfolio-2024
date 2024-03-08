import React, { useState } from 'react';
import styles from './styles.module.css';
import { toast } from 'react-toast'; // Importing toast from react-toast

export default function ContactMe() {
    const URL = "https://portfolio-backend-hama.onrender.com/api/v1/email";
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
     
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log(response);
            if (response.ok) {
                toast.success('Email sent successfully');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });

         
            } else {
                toast.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('An error occurred');
        }
        setIsLoading(false);
    };

    return (
        <>
            <div className={styles.form}>
                <div className={styles.container}>
                    <h2>Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required />
                        </div>
                        <button className={styles.btn} type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}















// import React, { useState } from 'react'
// import styles from './styles.module.css'
// export default function ContactMe() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     };
//     return (
//         <>
//           <div className={styles.form}>
//           <div className={styles.container}>
//                 <h2>Contact Me</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//                     </div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="email">Email:</label>
//                         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//                     </div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="subject">Subject:</label>
//                         <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
//                     </div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="message">Message:</label>
//                         <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required />
//                     </div>
//                     <button className={styles.btn} type="submit">Submit</button>
//                 </form>
//             </div>
//           </div>

//         </>
//     )
// }
