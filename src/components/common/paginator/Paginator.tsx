import React, {useState} from "react";
import styles from "./Paginator.module.css";
import {Pagination, Stack} from "@mui/material";

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


    return <div className={styles.paginator}>

        <div className={styles.pageNumber}>

            <Stack spacing={2}>
                <Pagination count={pagesCount}
                            variant="outlined" shape="rounded"
                            showFirstButton
                            showLastButton
                defaultPage={currentPage}
                onChange={(event, value)=>{onPageChanged(value)}}

                />

            </Stack>

        </div>
    </div>

}

export default Paginator;