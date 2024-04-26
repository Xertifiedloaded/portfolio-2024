import React, { useState, useEffect } from 'react';
import styles from './singleArticle.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import back from '../../assets/back-button.png';


export default function SingleArticle() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`https://portfolio-backend-hama.onrender.com/api/v1/blog/${slug}`)
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Error fetching article:', error));

    }, [slug]);
    console.log(article);
    const handleNavigate = () => {
        navigate("/article");
    };
    if (!article) {
        return <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <p style={{ fontSize: "40px" }}>Loading...</p>
        </div>
    }
    return (
        <>
            <section className={styles.single}>

                <div onClick={handleNavigate} className={styles.navigation}>
                    <img src={back} alt="" />
                </div>
                <div className={styles.details}

                    style={{
                        backgroundImage: `url(${article?.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        backgroundPosition: "center",
                     
                        transition: "all 0.5s ease-in-out",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundSize = "110%")}
                    onMouseLeave={(e) => (e.target.style.backgroundSize = "100%")}


                >
                    <div className={styles.articlesss}

                    >
                        <h1>{article?.title}</h1>
                        <p className={styles.paragraph}>{article?.headline}</p>
                        {article?.author ? (
                            <p className={styles.author}> {article?.author}</p>
                        ) : (
                            <p> Makinde Olaitan</p>

                        )}
                        {/* <p>{new Date(article?.publicationDate).toLocaleString("lookup")}</p> */}
                    </div>
              
                </div>
                <div className={styles.content}>
                    <p>{article?.content}</p>
                </div>
            </section>
        </>

    )


}