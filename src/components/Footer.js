import React from 'react';
// import { Button } from './Button1';
import './Footer.css';
import { Link } from 'react-router-dom';
import Contact from './Contactmail';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    歡迎與我們聯絡
                </p>
                <p className='footer-subscription-text'>
                    若有意訂製產品，請至聯絡我們填寫資料
                </p>
                {/* <div className='input-areas'> */}
                    {/* <form>
                        <input className='footer-input' type='email' name='email' placeholder='Your Email' />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form> */}
                {/* </div> */}
                <><Contact /></>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>關於我們</h2>
                        <Link to='/story' >品牌故事</Link>
                        <Link to='/productlist'>產品列表</Link>
                        <Link to='/cartoninfo'>紙板介紹</Link>
                        {/* <Link to='/'>Investors</Link> */}
                        {/* <Link to='/services'>Terms of Service</Link> */}
                    </div>
                    <div className='footer-link-items'>
                        <h2>聯絡我們</h2>
                        
                        <Link to='/contact'>聯絡我們</Link>
                        <Link to='/linesocial'>連線社群</Link>
                        <Link to='/services'>隱私權政策</Link>
                        <Link to='/locate'>廠房地點</Link>
                    </div>
                </div>
                {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>XXXXXXXXX</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div> */}
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                        <img src="/images/SunStar/SunStar_12.png" alt='logo'width={80}height={80} style={{borderRadius:'50px'}}/>{/* <i class="fa-solid fa-sun"/><i class="fa-solid fa-s" /><i class="fa-solid fa-u" /><i class="fa-solid fa-n" /><i class="fa-solid fa-s" /><i class="fa-solid fa-t" /><i class="fa-solid fa-a" /><i class="fa-solid fa-r" /><i class="fa-solid fa-star"/> */}
                        </Link>
                    </div>
                    <small className='website-rights'>SUNSTAR &copy;2024 All Rights Reserved.</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link line'
                            to='/linesocial'
                            target='_blank'
                            aria-label='Line'
                        >
                            <i className="fa-brands fa-line"></i>
                            
                        </Link>
                        {/* <Link className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube'></i>
                        </Link>
                        <Link className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'></i>
                        </Link> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
