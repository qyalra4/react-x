import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={ require('../images/logo.jpg')}  alt="Logo" className="logo" />
        <h2 className="site-name"> ياسين مثنى </h2>
      </div>
         
         <div>
            <div className='footer-right'>

               <nav className="for-left">
                 <h2>About Us</h2>
                    <Link to={'/'} className='Link'><li className='items-footer'>Our Projects</li></Link>
                  <Link to={'/'} className='Link'><li className='items-footer'>Jobs</li></Link>
                     <Link to={'/'} className='Link'><li className='items-footer'>Contact us</li></Link>
                 <Link to={'/'} className='Link'><li className='items-footer'>Privacy and safety</li></Link>
              </nav>
      
          <div className="for-right">
             <h2>Social Media</h2>
             <Link to={'/'} className='Link'><li className='items-footer'>WhatsApp</li></Link>
             <Link to={'/'} className='Link'><li className='items-footer'>Facebook</li></Link>
             <Link to={'/'} className='Link'><li className='items-footer'>Instagram</li></Link>
             <Link to={'/'} className='Link'><li className='items-footer'>Github</li></Link>
          </div>
       
          </div>
          <hr/>
           <h2 className='reserved'> 2025 جميع الحقوق محفوظة - ياسين مثنى     © </h2>
           {/*----------------- 😅 المبرمج ياسين مثنى  ---------------- */}
         </div>
      
    </footer>
  );
};

export default Footer;
