import React, {useState, useEffect } from 'react';
import style from "./style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function LeftPanel({match}) {
  return (
    <div className={style.LeftPanel}>
        {/* <button className={style.button42}>X</button> */}
        <button className={style.button42}>✎</button>
    </div>
  )
}

export default LeftPanel;
