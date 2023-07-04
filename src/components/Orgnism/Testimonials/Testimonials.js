import React,{useState} from 'react'
import styles from './Testimonials.module.css'
import leftArrow from '../../Atoms/assets/leftArrow.png'
import rightArrow from '../../Atoms/assets/rightArrow.png'
import { testimonialsData } from '../../Atoms/data/testimonialsData'
const Testimonials = () => {
  const [selected,setSelected]=useState(0)
  const tLength=testimonialsData.length;
  return (
    <div>
      <div className={styles.testimonials} id='testimonials'>
        <div className={styles.leftT}>
          <span>Testimonials</span>
          <span className='stroke-text'>why they</span>
          <span>say about us</span>
          <span>
            {testimonialsData[selected].review}
          </span>
          <span>
            <span style={{color:'orange',}}>
              {testimonialsData[selected].name}
            </span>{" "}
            - {testimonialsData[selected].status}
          </span>
        </div>
        <div className={styles.rightT}>
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt='error'/>

          <div className={styles.arrows}>
            
            <img src={leftArrow} alt='error' onClick={()=>{
              selected===0?setSelected(tLength-1):setSelected((prev)=>prev-1)
            }}/>
            <img src={rightArrow} alt='error' onClick={()=>{
              selected===tLength-1?setSelected(0):setSelected((prev)=>prev+1)
            }}/>
          </div>
          </div>
         

      </div>
    </div>
  )
}

export default Testimonials
