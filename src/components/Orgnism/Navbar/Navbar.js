import React,{useState} from 'react'
import styles from './Navbar.module.css'
import logo from '../../Atoms/assets/logo.png'
import Bars from '../../Atoms/assets/bars.png'
import {Link} from 'react-scroll'
import { list } from '../../Atoms/list'
const Navbar = () => {
  const mobile=window.innerWidth<=768?true:false
  const [menuOpen,setmenuOpen]=useState(false)
  return (
    <div className={styles.navbar}>
    <img src={logo} className={styles.logo}/>
    {(menuOpen=== false && mobile===true)?(<div  onClick={()=>setmenuOpen(true)}   style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}}><img src={Bars} alt='error' style={{width:'1.5rem',height:'1.5rem'}}/></div>):
      <ul>{list.map((option)=>{
        return <li key={option.id}>
          <p><Link
           to='home'
           onClick={()=>setmenuOpen(false)}
         span={true}
         smooth={true}>{option.home}</Link></p>
          <p><Link
           to='program'
           onClick={()=>setmenuOpen(false)}
         span={true}
         smooth={true}>{option.programs}</Link></p>
          <p ><Link
           to='reason'
           onClick={()=>setmenuOpen(false)}
         span={true}
         smooth={true}>{option.whyus}</Link></p>
          <p><Link  to='plans'
             onClick={()=>setmenuOpen(false)}
             span={true}
             smooth={true}>{option.plans}</Link></p>
          <p ><Link  to='testimonials'
          onClick={()=>setmenuOpen(false)}
        span={true}
        smooth={true}>{option.testimonials}</Link></p>

          
        </li>
       


       })}</ul>  
    }
     {/* { <ul>{list.map((option)=>{
      return <li key={option.id}>
        <p>{option.home}</p>
        <p>{option.programs}</p>
        <p>{option.whyus}</p>
        <p>{option.plans}</p>
        <p>{option.testimonials}</p>
      </li>
     })}</ul> } */}
    </div>
  )
}

export default Navbar


