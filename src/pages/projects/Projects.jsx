

import React, { useEffect, useState } from 'react';
import styles from './project.module.css';

import chain from '../../assets/link.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import github from '../../assets/github.svg'
axios.defaults.withCredentials = true;

export default function Projects() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const URL = "https://portfolio-backend-hama.onrender.com/api/v1/get";

    const fetchProjectData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://portfolio-backend-hama.onrender.com/api/v1/get');
            if (!response.ok) {
                throw new Error('Failed to fetch project data');
            }
            const data = await response.json();
            setData(data.data.portfolioEntries);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error fetching project data:', error);
        }
    };

    useEffect(() => {
        fetchProjectData();
    }, []);

    // Logic to paginate data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (isLoading) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    // Pagination
    const totalPages = Math.ceil(data.length / itemsPerPage);
    let startPage = 1;
    if (currentPage > 2) {
        startPage = currentPage - 1;
    }
    const endPage = Math.min(startPage + 2, totalPages);

    const displayPageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        displayPageNumbers.push(i);
    }

    return (
        <>
            <section className={styles.projects}>
                <h1>Developed Projects</h1>
                <p>Since the beginning of my journey as designer/developer, I've worked on multiple projects for myself , done internship in software companies and also collaborated with talented minds. Here are the projects i personnally worked on:</p>
                <div className={styles.all}>
                    <button>
                        <Link style={{ color: "black" }} to='https://github.com/Xertifiedloaded'>
                            View All Projects
                        </Link>
                    </button>
                </div>
                <div className={styles.card_container}>
                    {currentItems.map((project) => (
                        <div key={project._id} className={styles.card}
                            style={{
                                backgroundImage: `url(${project.projectImage})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                transition: "all 0.5s ease-in-out",
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundSize = "110%")}
                            onMouseLeave={(e) => (e.target.style.backgroundSize = "100%")}
                        >
                            <div className={styles.hover}>
                           
                                <div className={styles.content}>
                                    <h3>{project.projectName}</h3>
                                    <p>{project.tools}</p>
                                </div>
                                <div className={styles.navigator}>

                                    <div className={styles.navigate}>
                                        <img src={chain} alt="" />
                                        <Link>
                                            Check Out
                                        </Link>
                                    </div>
                                    <div className={styles.navigate}>
                                        <img src={github} alt="" />
                                        <Link to={project.imageGithubUrl}>
                                            Github
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>




                <ul className={styles.pagination}>
                    {displayPageNumbers.map((pageNumber) => (
                        <li key={pageNumber} className={pageNumber === currentPage ? styles.active : null}>
                            <button className={styles.btn} onClick={() => paginate(pageNumber)}>{pageNumber}</button>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}