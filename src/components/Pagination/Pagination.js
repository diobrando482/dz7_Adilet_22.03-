import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ pageCount, page, handleNext, handlePrev }) => {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const start = Math.max(1, page - 2);
  const end = Math.min(start + 4, pageCount);

  const visiblePages = pages.slice(start - 1, end);

  return (
    <div className={styles.pagination}>
      <button className={styles.button} onClick={handlePrev}>
        Prev
      </button>
      {visiblePages.map((p) => (
        <button
          key={p}
          className={`${styles.button} ${p === page ? styles.active : ''}`}
          onClick={() => console.log(`Go to page ${p}`)}
        >
          {p}
        </button>
      ))}
      <button className={styles.button} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;