import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

interface IProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  //   onPageChange: (num: number) => void;
  onPageChange: ({ selected }: { selected: number }) => void;
}

export const Pagination: React.FC<IProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  if (pageCount < 1) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        //   breakLabel={<Points />}
        onPageChange={(selected) => onPageChange(selected)}
        containerClassName={styles.paginationContainer}
        pageClassName={styles.paginationItem}
        activeClassName={styles.active}
        previousLinkClassName={styles.paginationLink}
        nextLinkClassName={styles.paginationLink}
        //   previousLabel={<Left />}
        //   nextLabel={<Right />}
      />
    </div>
  );
};
