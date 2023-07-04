import React from 'react'
import { plansData } from '../../Atoms/data/plansData'
import whiteTick from '../../Atoms/assets/whiteTick.png'
import styles from './Plans.module.css'
const Plans = () => {
  return (
    <div className={styles.PlansContainer} id='plans'>
          <div className={styles.programHeader} >
             <span className='stroke-text'>READY TO START</span>
             <span> YOUR JOURNEY</span>
             <span className='stroke-text'> NOW WITHUS</span>
          </div>
          <div className={styles.Plans}>
            {plansData.map((data,i)=>{
               return  <div className={styles.plan} key={i}>
                    {data.icon}
                    <span>{data.name}</span>
                    <span>$ {data.price}</span>
                    <div className={styles.features}>
                        {data.features.map((feature,i)=>{
                           return <div className={styles.feature}>
                                <img src={whiteTick} alt='error'/>
                                <span key={i}>{feature}</span>
                            </div>
                        })}
                    </div>
                    <div>
                        <span>See more benefits ...</span>
                        
                    </div>
                    <button className={styles.btn}>Join now</button>
                </div>
            })}
          </div>
    </div>
  )
}

export default Plans
