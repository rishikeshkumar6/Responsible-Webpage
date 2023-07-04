import React from 'react'
import styles from './Programs.module.css'
import {programsData} from '../../Atoms/data/programsData'
import rightArrow from '../../Atoms/assets/rightArrow.png'
const Programs = () => {
  return (
    <div className={styles.programs} id='program'>
      <div className={styles.programsheader}>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape your</span>
      </div>
      <div className={styles.programsCategory}>
             {programsData.map((data)=>{
                return <div className={styles.category} key={data.id}>
                    {data.image}
                    <span>{data.heading}</span>
                    <span>{data.details}</span>
                    <div className={styles.joinnow}>
                        <span>Join Now</span>
                        <img src={rightArrow} alt='error'/>
                    </div>
                </div>
             })}
      </div>
    </div>
  )
}

export default Programs
