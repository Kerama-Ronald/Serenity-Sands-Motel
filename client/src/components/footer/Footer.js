import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className='top'>
      <div>
        <h2>Serenity Sands</h2>
      <p>The Sarova Whitesands Beach Resort and Spa is a luxury hotel in an
idyllic setting on the shores of the Indian Ocean. The hotel, located
on the North Coast of Mombasa, is nestled amongst towering palms and
lush gardens with five pools including a quiet pool, a pool bar and a waterslide.</p>
      </div>
      {/* <div>
        <a href ="/"><FaFacebook/></a>
        <a href ="/"><FaInstagram/></a>
        <a href ="/"><FaTwitter/></a>
      </div> */}
      

    </div>
    <div className='bottom'>
      <div>
        <h4>Project</h4>
        <a href='/'> Changelog</a>
        <a href='/'> Status</a>
        <a href='/'> License</a>
        <a href='/'> All Versions</a>
      </div>
      <div>
        <h4>Community</h4>
        <a href='/'> Issues</a>
        <a href='/'> Project</a>
        <a href='/'> Twitter</a>
        
      </div>
      <div>
        <h4>Help</h4>
        <a href='/'>Support</a>
        <a href='/'>Troubleshooting</a>
        <a href='/'>Contact Us</a>
        
      </div>
      <div>
        <h4>Others</h4>
        <a href='/'>Terms of Services</a>
        <a href='/'>Privacy</a>
        <a href='/'>License</a>
        
      </div>
    </div>
  </div>
);

export default Footer;