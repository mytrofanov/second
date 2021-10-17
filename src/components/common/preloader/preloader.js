import React from "react";
import preloader from  "../../../assets/images/Spin-1s-200px.svg";
import s from "./Preloader.module.css"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

let Preloader = () => {
return <div className={s.loaderBlock}>
     <div className={s.loader}>
          <Box sx={{width: '100%'}}>
               <LinearProgress/>
          </Box>
     {/*<img alt={"preloader"} className={s.img} src={preloader} />*/}
     </div>
</div>
}

export default Preloader;