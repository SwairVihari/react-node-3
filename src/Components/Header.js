import React from 'react'
import Styles from './Header.module.css'
import bg from "../Images/trade_bg.jpg"

const Header = () => {
  return (
    <>

    <div className={Styles.header}>
        {/* <div className={Styles.imgContainer}>
            <img className={Styles.img} src={bg}/>
        </div> */}

        <h1 className={Styles.headerText}>
        Trade bitcoin and other cryptocurrencies and earn real profits in the following 24 hours
        </h1>
    </div>
    
    </>
  )
}

export default Header