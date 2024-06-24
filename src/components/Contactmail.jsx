import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactmail.css';
// import { Alert } from '@mui/material';

// npm i @emailjs/browser

const Contactmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_93qwxig', 'template_htp3n2p', form.current, {
        publicKey: 'gg-peF-BlfVjZX3OS',
      })//'YOUR_SERVICE_ID','YOUR_TEMPLATE_ID','YOUR_PUBLIC_KEY'
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('messenge sent');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
//service_49boq46
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>姓名_Name</label>
        <input type="text" name="user_name" placeholder='請輸入姓名或公司名稱(Press your name or company)' />
        <label>電子信箱_Email</label>
        <input type="email" name="user_email" placeholder='請輸入電子信箱(Press your email)' />
        <label>訊息_Message</label>
        <textarea name="message" placeholder='請輸入想傳送的訊息(Press your message)'/>
        <input type="submit" value="寄出_Send" />
      </form>
    </>
      
  );
};

export default Contactmail;