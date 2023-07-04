import React from 'react';
import styles from './Form.module.css'
import { style } from '../../Atoms/style';
import { useForm, ValidationError } from '@formspree/react';
// const style={
//   border:'1px solid black',
//   boxShadow:' 0rem 0rem 6rem',
//   position:'relative',
//   left:'25rem',
//   display:'flex',
//   fontSize:'2rem',
//   fontFamily:' Arial, Helvetica, sans-serif',
//   justifyContent:'center',
//   backgroundColor:'white',
//   alignItems:'center',
//   width:'30%',
//   height:'20vh'
// }

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkvzjgy");
  if (state.succeeded) {
      return <p style={style}>Thanks for joining!</p>;
  }
  return (
      <div id='form'>
      <form onSubmit={handleSubmit} className={styles.formContainer} >
       <label htmlFor="email">
      Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      {/* <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /> */}
      <button type="submit" disabled={state.submitting} className={styles.btnstyle}>
        Submit
      </button>
    </form>
    </div>
  );
}

export default ContactForm;
