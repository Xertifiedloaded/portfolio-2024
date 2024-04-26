import React, { useEffect, useState } from 'react';
import styles from './article.module.css';
import { Link } from 'react-router-dom';
import chevron from '../../assets/chevron-left.svg'
export default function Article() {
    const [articles, setArticles] = useState([]);

    const [loading, setLoadin] = useState(true)

    const fetchProjectData = async () => {
        try {
            const response = await fetch("https://portfolio-backend-hama.onrender.com/api/v1/blog");
            if (!response.ok) {
                throw new Error('Failed to fetch project data');
            }
            const data = await response.json();
            console.log(data);
            setArticles(data)
            setLoadin(false)


        } catch (error) {
            setLoadin(false)
            console.error('Error fetching project data:', error);
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(5);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
        pageNumbers.push(i);
    }


    const maxPagesToShow = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(
        Math.ceil(articles.length / articlesPerPage),
        startPage + maxPagesToShow - 1
    );

    if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }


    useEffect(() => {
        fetchProjectData();
    }, []);



    if (loading) {
        return (
            <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
                <p style={{ fontSize: "40px" }}>Loading...</p>
            </div>
        );
    }
  


    return (
        <>
            <article>
                <h1>Articles</h1>
                <div className={styles.article}>
                    {currentArticles.map((article) => {
                        return (
                            <div key={article._id} className={styles.blog}>
                                <div className={styles.imageContainer}
                                
                                style={{
                                    backgroundImage: `url(${article.image})`,
                                    backgroundRepeat: "no-repeat",
                                    height:"200px",
                        
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transition: "all 0.5s ease-in-out",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundSize = "110%")}
                                onMouseLeave={(e) => (e.target.style.backgroundSize = "100%")}
                                
                                >
                                    {/* <img src={article.image} alt={article.image} /> */}
                                </div>
                                <div className={styles.articleContent}>
                                    <h3>{article.title}</h3>
                                    <p>{article.headline}</p>
                                    
                                    <p>{new Date(article.publicationDate).toLocaleString("lookup")}</p>
                                    <Link to={`/article/${article.slug}`}>Read more <img style={{ width: '10px', height: "10px" }} src={chevron} alt="" /></Link>
                                </div>

                            </div>
                        );
                    })}
                </div>

                <div className={styles.pagination}>

                    <button
                        className='left'
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </button>

                    {pageNumbers.slice(startPage - 1, endPage).map((number) => (
                        <button

                            key={number}
                            onClick={() => paginate(number)}
                            style={{ width: "30px", height: "30px", borderRadius: "100%", border: "none" }}
                            className={number === currentPage ? styles.active_number : ''}
                        >
                            {number}
                        </button>
                    ))}

                    <button
                        className='right'
                        onClick={() =>
                            paginate(Math.min(
                                Math.ceil(articles.length / articlesPerPage),
                                currentPage + 1
                            ))
                        }
                        disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}
                    >
                        {'>'}
                    </button>
                </div>
            </article>
        </>
    );
}