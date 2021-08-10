import React from "react";
import styles from "./Paginator.module.css";


let Paginator = ({totalUsersCount, currentPage, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pageNumber}>
                        <span
                            onClick={
                                (event) => {
                                    onPageChanged(1);
                                }}
                            className={styles.totalPages}> Первая страница    </span>
            {pages.map(p => {
                if (p <= currentPage + 5 & p >= currentPage - 5)
                    return (<span
                        className={p === currentPage ? styles.selectedPage : styles.nonSelectedPage}

                        onClick={
                            (event) => {
                                onPageChanged(p);
                            }}> {p} </span>);
            })}
            <span
                onClick={
                    (event) => {
                        onPageChanged(pagesCount);
                    }}
                className={styles.totalPages}> Последняя страница   </span>
        </div>
    </div>

}



export default Paginator;