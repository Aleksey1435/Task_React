import React from 'react';

import './style.css'

const AboutPage = () => {
  return (
    <section class="about">
      <div class="container">
        <div class="about-wrap">
          <div class="about-left">
            <div class="about-label">About us</div>
            <h2>Our designs solve problems</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div class="about-right">
            <img src="/assets/about.jpg" alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
