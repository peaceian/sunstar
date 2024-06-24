import React from 'react';
import Contactmail from '../Contactmail';
import './Contact.css';
import LineSocial from '../LineSocial';
import Footeralter from '../Footeralter';

const Contact = () => {
  return (
    <>
      <div className='contact_title'>
        <h1>聯繫我們</h1>
        <h2>您可以透過以下電子郵件，徵詢購買或意見回覆。</h2>
        <br />
        <h2>若您需要報價，以下資料需請提供，才會使配紙箱材質。（請複製以下至訊息區填寫）</h2>
        <br />
        <p>尺寸(Lcm*Wcm*Hcm)：</p>
        <p>估計裝貨重量(kg)：</p>
        <p>數量：</p>
        <p>地址：</p>
        <p>備註要求：</p>
        <br />
        <h2>或來電與直接服務</h2>
      </div>
      <Contactmail />
      <LineSocial />
      <Footeralter/>
    </>


  );
}

export default Contact;
