import React from 'react'
import styles from './Footer.module.css'
import github from '../../Atoms/assets/github.png'
import instagram from '../../Atoms/assets/instagram.png'
import linkedin from '../../Atoms/assets/linkedin.png'
import { Link } from 'react-router-dom'
import logo from '../../Atoms/assets/logo.png'
const Footer = () => {
  return (
    
      <div className={styles.footerContainer}>
           <hr/>
           <div className={styles.footer}>
           <div className={styles.socialLinks}>
            <Link to={'https://github.com/rishikeshkumar6'}> <img src={github} alt='error' className={styles.image}/></Link>
           <Link to={'https://www.linkedin.com/in/rishikesh-kumar-singh-4957bb250'}> <img src={instagram} alt='error' className={styles.image}/></Link>
            <Link to={'https://www.linkedin.com/in/rishikesh-kumar-singh-4957bb250'}><img src={linkedin} alt='error' className={styles.image}/></Link>
            </div>
            
           
           <div className={styles.Logo}>
            <img src={logo} alt='error'/>
           </div>
           
      </div>
    </div>
    
  )
}

export default Footer
