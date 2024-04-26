import styles from './pagination.module.css'
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className={styles.paginationContainer}>
        <button onClick={() => onPageChange(currentPage - 1)} className={styles.paginationButton}>{'<'}</button>
        {[...Array(totalPages)].map((_, index) => (
          <button key={index + 1} onClick={() => onPageChange(index + 1)} className={styles.paginationButton}>{index + 1}</button>
        ))}
        <button onClick={() => onPageChange(currentPage + 1)} className={styles.paginationButton}>{'>'}</button>
      </div>
    );
  };
  export default Pagination
  