import React from 'react';

import '../styles/Footer.css'; // Ensure this is the correct path to your CSS file.


const Footer = () => {
  return (
    <div>
      <footer className="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
        <div className="social" role="navigation" aria-labelledby="social-heading">
          <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#" aria-label="Mastodon"><i className="fa-brands fa-mastodon"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <hr className="footer-break" />
        <ul className="footer-links" role="navigation" aria-labelledby="footer-links-heading">
          <h3 id="footer-links-heading" className="sr-only">Footer Links</h3>
          <li><a href="#">Site Home</a></li>
          <li><a href="#">Playground</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Contents</a></li>
        </ul>
        <p className="copyright">© 2024 SDavidPrince. Demo of a footer. Some Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;


