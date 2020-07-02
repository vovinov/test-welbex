import React from 'react';
import classNames from 'classnames';

import './pagination.css';

function Pagination({rowsPerPage, totalRows, changePage, currentPage}) {

    // const [changedRows, changeTotalRows] = useState(totalRows);

    const rowNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        rowNumbers.push(i);
    }

    return (
        <nav>
        <ul className='pagination'>
            {rowNumbers.map((number) => {

                const itemClasses = classNames({
                    'pagination__item': true,
                    'pagination__item--active': currentPage === number
                })

                return (
                    <li 
                    key={number} 
                    className={itemClasses}>
                    <a 
                        onClick={() => changePage(number)} 
                        href='!#' 
                        className='pagination__link'>
                    {number}
                    </a>
                </li>
                )
              
            })}
        </ul>
        </nav>
    );
}



export default Pagination
