import React from "react";

const Pagination = ({ appsPerPage, totalApps, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalApps / appsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li onClick={() => paginate(number)} key={number}>
                    <a href="#" class="active">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
