import React from 'react'
import image1 from '../../Atoms/assets/image1.png'
import image2 from '../../Atoms/assets/image2.png'
import image3 from '../../Atoms/assets/image3.png'
import image4 from '../../Atoms/assets/image4.png'
import nb from '../../Atoms/assets/nb.png'
import adidas from '../../Atoms/assets/adidas.png'
import nike from '../../Atoms/assets/nike.png'
import tick from '../../Atoms/assets/tick.png'
import styles from './Reasons.module.css'
const Reasons = () => {
  return (
    <div className={styles.Reasons} id='reason'>
      <div className={styles.leftReasons}>
      <img src={image1} alt='error'/>
         <img src={image2} alt='error'/>
          <img src={image3} alt='error'/>
           <img src={image4} alt='error'/>
      </div>
      <div className={styles.rightReasons}>
       <span>some reasons</span>
       <div>
        <span className='stroke-text'>why</span>
        <span> choose us?</span>
       </div>
       <div className={styles.detailsright}>
        <div>
          <img src={tick} alt='error'/>
          <span>OVER 140+ EXPERT COACHING</span>
        </div>
        <div>
        <img src={tick} alt='error'/>
          <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </div>
        <div>
        <img src={tick} alt='error'/>
          <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </div>
        <div>
        <img src={tick} alt='error'/>
          <span>RELIABLE PARTNERS</span>
        </div>
       </div>
       <span style={{color:'gray',fontWeight:'normal'}}>OUR PARTNERS</span>
       <div className={styles.partners}>
       <img src={nb} alt='error'/>
       <img src={adidas} alt='error'/>
       <img src={nike} alt='error'/>
       </div>
      </div>
    </div>
  )
}

export default Reasons
