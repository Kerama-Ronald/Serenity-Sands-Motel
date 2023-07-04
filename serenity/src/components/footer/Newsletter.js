import React from 'react';

<<<<<<< HEAD:serenity/src/components/footer/Newsletter.js
// import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
=======
import SubHeading from '../SubHeading/SubHeading';
import './NewsLetter.css';
>>>>>>> 5123be9 (debugging error messages):serenity/src/components/footer/newsletter.js

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      {/* <SubHeading title="Newsletter" /> */}
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;