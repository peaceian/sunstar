import { Link } from 'react-router-dom';
import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div>
            <div>
                <p className='contact_info'>信箱：<Link to='/contact' className='contact_info'>sunstarcarton@gmail.com</Link></p>
                <p className='contact_info'>電話：(02) 8286-0028</p>
                <p className='contact_info'>傳真：(02) 8286-0082</p>
            </div>
        </div>
    )
}

export default ContactInfo;
