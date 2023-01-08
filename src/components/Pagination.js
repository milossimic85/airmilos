import React, { useState } from "react";
//import classes from "./Pagination.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.includes(currentPage - 1) && (
          <a
            className="page-link"
            onClick={() => {
              setCurrentPage(currentPage - 1);
              paginate(currentPage - 1);
            }}
          >
            Prev
          </a>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              className="page-link"
              onClick={() => {
                setCurrentPage(number);
                paginate(number);
              }}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
        {pageNumbers.includes(currentPage + 1) && (
          <a
            className="page-link"
            onClick={() => {
              setCurrentPage(currentPage + 1);
              paginate(currentPage + 1);
            }}
          >
            Next
          </a>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
