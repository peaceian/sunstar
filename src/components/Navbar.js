import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { CartContext } from '../features/ContextProvider';
// import { Button } from './Button1.js';

function Navbar() {
  const [click, setClick] = useState(false); //true or false is all ok, the ifelse sort needs to be changed.
  const handleClick = () => setClick(!click);//must be !click, (means not equal the click)
  const closeMobileMenu = () => setClick(false);
  //cart count
  // const {cart}=useContext(CartContext)

  // const [button,setButton] = useState(true);
  // const showButton = () => {
  //   if(window.innerWidth<=960){
  //     setButton(false);
  //   }else{
  //     setButton(true);
  //   }
  // };

  // useEffect(
  //   () => {
  //     showButton()},[]
  // );

  // window.addEventListener('resize',showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="images/SunStar_/SunStar_6.png" alt='logo' width={140} height={130} style={{objectFit:'cover'}}/>{/* <i class="fa-solid fa-sun" /><i class="fa-solid fa-s" /><i class="fa-solid fa-u" /><i class="fa-solid fa-n" /><i class="fa-solid fa-s" /><i class="fa-solid fa-t" /><i class="fa-solid fa-a" /><i class="fa-solid fa-r" /><i class="fa-solid fa-star" /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                首頁
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/product' className='nav-links' onClick={closeMobileMenu}>
                Product
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link to='/productlist' className='nav-links' onClick={closeMobileMenu}>
                產品列表
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                服務條款
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/locate' className='nav-links' onClick={closeMobileMenu}>
                廠房地點
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                聯絡我們
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                <i class="fa-solid fa-cart-arrow-down"/>{cart.length}
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
