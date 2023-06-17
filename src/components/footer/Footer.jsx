import React from 'react'
import styles from "./Footer.module.css";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        console.log('clicked---)*&*&^*')
        navigate("/About")
    }

  return (
    <div className={styles.footerMain} onClick={handleClick}>Contact Us</div>
  )
}

export default Footer