import React from "react";
import preloader from  "../../../assets/images/Spin-1s-200px.svg";
import s from "./Preloader.module.css"

let Preloader = (props) => {
return <div className={s.loaderBlock}>
     <div className={s.loader}>
     <img className={s.img} src={preloader} />
     </div>
</div>
}

export default Preloader;