import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../icons/Logo";


import './styles.css'

const MENU = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Pricing', path: '/price' },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__top-wrap">
            <div className="footer__top-left">
              <Logo className="logo" />
              <p className="text">
                We are always open to discuss your project and improve your
                online presence.
              </p>
              <div className="footer__info">
                <div className="footer__info-item">
                  <span>Email me at</span>
                  <div>contact@website.com</div>
                </div>
                <div className="footer__info-item">
                  <span>Call us</span>
                  <div>0927 6277 28525</div>
                </div>
              </div>
            </div>
            <div className="footer__top-right">
              <h2>Lets Talk!</h2>
              <p>
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              <div className="media">
                <img src="/assets/facebook.png" alt="facebook" />
                <img src="/assets/twitter.png" alt="twitter" />
                <img src="/assets/instagram.png" alt="instagram" />
                <img src="/assets/linkedln.png" alt="linkedLn" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-wrap">
            <div className="footer__bottom-copiright">
              {`Copyright ${new Date().getFullYear()}, Finsweet.com`}
            </div>
            <ul className="footer__bottom-nav">
              {MENU.map((item) => {
                return <li className="footer__bottom-item">
                  <Link to={item.path}>{item.label}</Link>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
