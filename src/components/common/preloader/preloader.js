import React from "react";
import s from "./Preloader.module.css"
import {SyncLoader} from "react-spinners";
import {css} from "@emotion/react";

let Preloader = () => {

    const override = css`
      display: block;
      z-index: 1000;
      position: fixed;
      margin: 250px 400px;
      border-color: red;

    `;
    return <div className={s.loaderBlock}>
        <div className={s.loader}>
            <SyncLoader color={"#7D93C5"} css={override} size={20}/>

            {/*<Box sx={{width: '100%'}}>*/}
            {/*     <LinearProgress/>*/}
            {/*</Box>*/}
            {/*<img alt={"preloader"} className={s.img} src={preloader} />*/}
        </div>
    </div>
}

export default Preloader;