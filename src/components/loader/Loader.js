import React from 'react'
import ReactDOM from "react-dom"
import loaderimg from "../../assets/loader.gif"
import styles from "./Loader.module.scss"

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={loaderimg} alt="Loading..." />
        </div>
    </div>,
    document.getElementById("loader")
    
  )
}

export default Loader