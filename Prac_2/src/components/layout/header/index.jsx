import React from 'react';
import cn from 'classnames'
import Logo from "../../icons/Logo";
import { Link, useLocation } from 'react-router-dom';

import './styles.css'
import { useState } from "react";

const MENU = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Pricing', path: '/price' },
]

const Header = () => {

  const { pathname } = useLocation();

  const [isShowModal, setIsShowModal] = useState(false);

  const handleShowModal = () => {
    setIsShowModal(true)
    document.body.classList.add('_lock');
  }

  const handleCloseModal = () => {
    setIsShowModal(false)
    document.body.classList.remove('_lock');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsShowModal(false)
    document.body.classList.remove('_lock');

    const data = serializeForm(event.target)
    console.log(data);
    alert(`Name is ${data.name}, phone - ${data.phone}`)
  }

  const serializeForm = (formNode) => {
    const { elements } = formNode;
    const obj = {}

    Array.from(elements).forEach((element) => {
      const { name, value } = element;
      obj[name] = value;
    })

    return obj;
  }


  return (
    <><header className={cn('header')}
    >
      <nav className="navbar">
        <div className="container">
          <div className="navbar__wrapper">
            <Logo alt="logo" className="logo" />
            <div className="navbar-collapse">
              <ul className="navbar-nav">
                {MENU.map((item) => {
                  return <li key={item.path} className={cn('navbar-item', { active: pathname === item.path })}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                }
                )}
              </ul>
              <button className="navbar-button" onClick={handleShowModal}>Contact us</button>
            </div>
          </div>
        </div>
      </nav>

    </header>
      <div className={cn("contact-modal", { show: isShowModal })}>
        <form action="#" id="contact-form" onSubmit={handleSubmit}>
          <h2>Contact us</h2>
          <div className="contract-cross" onClick={handleCloseModal}>
            <span></span>
            <span></span>
          </div>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <button type="submit" id="submit-button">Send</button>
        </form>
      </div>

    </>

  );
};

export default Header;
