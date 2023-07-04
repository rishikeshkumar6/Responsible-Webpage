import React from 'react'
import styles from './hero.module.css'
import { Link } from 'react-scroll'
import NumberCounter from 'number-counter'
import hero_image from '../../Atoms/assets/hero_image.png'
import hero_image_back from '../../Atoms/assets/hero_image_back.png'
import Heart from '../../Atoms/assets/heart.png'
import Calories from '../../Atoms/assets/calories.png'
import Navbar from '../../Orgnism/Navbar/Navbar'
const Hero = () => {
 
  const transition={type:'spring',duration:3}
  return (
    <div className={styles.hero} id='home'>
      <div className={styles.lefthero}>
          <Navbar/>
          <div className={styles.fitness}>
           <div></div>
            <span>the best fitness club in the our area</span>
          </div>
          
          
           <div className={styles.herotext}>
            <div>
              <span className='stroke-text'>SHAPE YOUR</span>
              
            </div>
           
            <div>
              <span>IDEAL BODY</span>
            </div>

            <div>
              <span>Ideal body in here we provides more confident and self motivated person</span>
            </div>
           </div>

           <div className={styles.figure}>
            <div>
              <span><NumberCounter end={140} start={100} delay='4' preFix="+"/></span>
              <span>expert coaches</span>
            </div>
            <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix="+"/></span>
              <span>members joined</span>
            </div>
            <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix="+"/></span>
              <span>fitness programs</span>
            </div>
            
           </div>
           <div className={styles.herobtn}>
              <button className={styles.btn}>Get Stated</button>
              <button className={styles.btn}>Learn More</button>
            </div>
      </div>
      <div className={styles.righthero}> 
       <p className={styles.btn} ><Link
           to='form'
         span={true}
         smooth={true}>Join now</Link></p> 
        

      <div className={styles.heartrate}>
           <img src={Heart} alt="error"/>
           <span>Heart Rate</span>
           <span>116 bpm</span>
      </div>
      <img src={hero_image} className={styles.heroimg} alt="error"/>
      <img src={hero_image_back} className={styles.heroimgback} alt='error'/>
      <div className={styles.calories}>
          <img src={Calories} alt='error'/>
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
