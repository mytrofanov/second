import React, {useState} from "react";
import styles from "./Paginator.module.css";

type PropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (pageNumber:number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({
                                          totalUsersCount, currentPage,
                                          pageSize, onPageChanged, portionSize = 10
                                      }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / pageSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return <div className={styles.paginator}>
        <div className={styles.pageNumber}>
                        <span onClick={
                            (event) => {
                                onPageChanged(1);
                                setPortionNumber(portionNumber = 1)
                            }}
                              className={styles.totalPages}> ⏮  </span>
            {portionNumber > 1 && <span className={styles.totalPages}
                                        onClick={() => {
                                            setPortionNumber(portionNumber - 1)
                                        }}>
                ⏪</span>}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map((p) => {
                return <span className={p === currentPage ? styles.selectedPage : styles.nonSelectedPage}
                             onClick={
                                 (event) => {
                                     onPageChanged(p);
                                 }}> {p} </span>
            })}

            {portionCount > portionNumber && <span className={styles.totalPages}
                                                   onClick={() => {
                                                       setPortionNumber(portionNumber + 1)
                                                   }}>
                ⏩</span>}
            <span
                onClick={
                    (event) => {
                        onPageChanged(pagesCount);
                        setPortionNumber(portionNumber = portionCount)
                    }}
                className={styles.totalPages}> ⏭   </span>
        </div>
    </div>

}

export default Paginator;