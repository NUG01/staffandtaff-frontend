import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/about/about.module.css'
import Link from 'next/link';
import ValidationHint from '../ValidationHint';
import CheckIcon from '../../../public/check-icon.png'
import Image from 'next/image.js';
import axios from '@/lib/axios';

const Form = ({}) => {
    
    const [submited,setSubmited] = useState(false)
    const [formError, setFormError] = useState("")

    const [inputValues, setInputValue] = useState({
        name: "",
        email: "",
        message: "",
        confirm: false,
      });

      const [inputFocused, setInputFocused] = useState('');

      const [isValid,setIsValid] = useState(false)
      const [sent,setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError('')
        setSubmited(true)
        if(!isValid) return
        // setValidation(inputValues)
        e.target.querySelector('input[type="submit"]').style.opacity = '0.4'
        e.target.querySelector('input[type="submit"]').style.pointerEvents = 'none'
        axios
        .post('/api/v1/user-mail', {
          name: inputValues.name,
          email: inputValues.email,
          sms: inputValues.message
        })
        .then((res) => {
          setSent(true)
          console.log(res)
        }).catch(()=>{
          setFormError('failed text here')
          e.target.querySelector('input[type="submit"]').style.opacity = '1'
          e.target.querySelector('input[type="submit"]').style.pointerEvents = 'unset'
        })
    }

  function handleChange(event) {
    const { name, value } = event.target;
    name == 'confirm' ?
    setInputValue({ ...inputValues, [name]: event.target.checked }) :
    setInputValue({ ...inputValues, [name]: value })
  }

  function isValidEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const checkValidation = () => {
    setIsValid(true)
    if(inputValues.name == '') {
        setIsValid(false)
    }
    else if(!isValidEmail(inputValues.email)) {
        setIsValid(false)
    }
    else if(inputValues.message == ''){
        setIsValid(false)
    }
    else if(inputValues.confirm == false){
        setIsValid(false)
    }
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);


  return (
    <div className={styles.formContent}>
        <h3>Contactez-Nous</h3>
        <h4>Do you have any questions or suggestions? Reach us out.</h4>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.formController}>
            <div className={styles.inputControl}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 2C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4C6 4.53043 6.21071 5.03914 6.58579 5.41421C6.96086 5.78929 7.46957 6 8 6C8.53043 6 9.03914 5.78929 9.41421 5.41421C9.78929 5.03914 10 4.53043 10 4C10 3.46957 9.78929 2.96086 9.41421 2.58579C9.03914 2.21071 8.53043 2 8 2ZM8 9C10.67 9 16 10.33 16 13V16H0V13C0 10.33 5.33 9 8 9ZM8 10.9C5.03 10.9 1.9 12.36 1.9 13V14.1H14.1V13C14.1 12.36 10.97 10.9 8 10.9Z" fill="#757575"/>
                </svg>
                {submited &&
                 inputValues.name == '' &&
                  <ValidationHint text="Please complete the required field."/>}
                <input 
                onFocus={(e) => setInputFocused(e.target.name)}
                value={inputValues.name}
                onChange={(e) => handleChange(e)} 
                className={submited && inputValues.name == '' ? styles.singleInputInvalid : styles.singleInput} 
                type="text" 
                placeholder="Full Name"
                name='name' 
                readOnly={sent}
                id='name'/>
                {!submited && inputFocused != 'name' && inputValues.name == '' && <p>Full Name<span>*</span></p>}
                {/* <input type="email" placeholder="Email" className={styles.singleInput} required name="log-email" onChange={event => setEmail(event.target.value)} value={email}/> */}
            </div>
            <div className={styles.inputControl}>
                <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                        fill="#757575" />
                </svg>
                {submited &&
                !isValidEmail(inputValues.email) &&
                 <ValidationHint text="Please enter your email address in format yourname@exemple.com"/>}
                <input
                onFocus={(e) => setInputFocused(e.target.name)}
                 onChange={(e) => handleChange(e)}
                  value={inputValues.email}
                  placeholder="E-mail"
                  className={submited && !isValidEmail(inputValues.email) ? styles.singleInputInvalid : styles.singleInput} 
                  type="text" 
                  readOnly={sent}
                  name='email' 
                  id='email'/>
                  {!submited && inputFocused != 'email' && inputValues.email == '' && <p>E-mail<span>*</span></p>}
            </div>
            <div className={styles.inputControl}>
            {submited &&
             inputValues.message == '' &&
             <ValidationHint text="Please complete the required field."/>}
                <textarea 
                onFocus={(e) => setInputFocused(e.target.name)}
                value={inputValues.message}
                onChange={(e) => handleChange(e)}  
                placeholder='Message' 
                maxLength={1000} 
                readOnly={sent}
                className={submited && inputValues.message == '' ? styles.singleInputInvalid : styles.singleInput} 
                name="message" 
                id={styles.message}></textarea>
                {!submited && inputFocused != 'message' && inputValues.message == '' && <p id={styles.messageHolder}>Message<span>*</span></p>}
            </div>
            
            <div className={styles.checkbox}>
                {submited &&
                 inputValues.confirm == false &&
                  <ValidationHint text="Please make sure to agree to the terms and conditions and the privacy policy."/>}
                <input 
                value={inputValues.confirm}
                className={submited && inputValues.confirm == false ? styles.checkboxInputInvalid : styles.checkboxInput} 
                onChange={(e) => handleChange(e)} 
                type="checkbox"
                disabled={sent}
                name="confirm" 
                />
                <p className={submited && inputValues.confirm == false && styles.checkboxTextInvalid}>I agree to the <Link href="/terms">Terms and Conditions</Link> and the <Link href="/privacy">Privacy Policy</Link> <span>*</span></p>
            </div>
            {sent ? 
            <div className={styles.successText}>
                <Image src={CheckIcon} alt="check" />
                <p>Your message has been sent successfully. <br/> We will get back to you as soon as possible.</p>
            </div> :
              <>
                <p className={styles.mailFailed}>{formError}</p>
                <input type="submit" value="SEND" className={styles.submitInput}/>
              </>
            }
            
        </form>
    </div>
  )
}

export default Form