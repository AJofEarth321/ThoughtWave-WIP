import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    //defines constants used in navbar-containter, then utilizes useState to update state when clicked.
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    //defines functions used in navbar-container, setting the click value as opposite of useState to create a toggle between mobile icon click states. 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 

    //shows the "Contact Us!" button only if the window width is greater then designated size.
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    //renders "Contact Us!" button once only, keeping it from reappearing on refresh after page resize.
    useEffect(() => {
        showButton()
    }, [])

    //creates event listener for window, defining what to listen for (resizing) and what to do (call showButton function). 
    window.addEventListener('resize', showButton);

  return (
    //creates the links to site pages within the navbar container, as well as defines mobile menu behavior with onClick
    <>
        <nav className='navbar'>
           <div className='navbar-container'>
               <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                   ThoughtWave<i className='fa-brands fa-cloudversify'></i>
               </Link>
               <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                           About
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/impact' className='nav-links' onClick={closeMobileMenu}>
                           Impact
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/curriculum' className='nav-links' onClick={closeMobileMenu}>
                           Curriculum
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/in-the-media' className='nav-links' onClick={closeMobileMenu}>
                           In the Media
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Contact us to learn more!
                       </Link>
                   </li>
               </ul>
               {button && <Button buttonStyle='btn--outline'>Contact Us!</Button>}
           </div>
        </nav>
    </>
  )
}

export default Navbar;