import React from 'react';
import cn from 'classnames';

import './style.css'

const PRICES = [
  {
    price: 299,
    label: 'Per Design',
    title: 'Landing Page',
    description: 'When you’re ready to go beyond prototyping in Figma',
    listValues: [
      { isInclude: true, label: 'All limited links' },
      { isInclude: true, label: 'Own analytics platform' },
      { isInclude: true, label: 'Chat support' },
      { isInclude: false, label: 'Optimize hashtags' },
      { isInclude: false, label: 'Unlimited users' },

    ]
  },
  {
    price: 399,
    label: 'Multi Design',
    title: 'Website Page',
    description: 'When you’re ready to go beyond prototyping in Figma',
    listValues: [
      { isInclude: true, label: 'All limited links' },
      { isInclude: true, label: 'Own analytics platform' },
      { isInclude: true, label: 'Chat support' },
      { isInclude: true, label: 'Optimize hashtags' },
      { isInclude: true, label: 'Unlimited users' },

    ]
  },
  {
    price: 499,
    label: 'Per Design',
    title: 'Complex Project',
    description: 'When you’re ready to go beyond prototyping in Figma',
    listValues: [
      { isInclude: true, label: 'All limited links' },
      { isInclude: true, label: 'Own analytics platform' },
      { isInclude: true, label: 'Chat support' },
      { isInclude: true, label: 'Optimize hashtags' },
      { isInclude: true, label: 'Unlimited users' },

    ]
  }
]

const PricePage = () => {
  return (
    <section class="pricing">
      <div class="container">
        <h2>Our Pricing Plans</h2>
        <p class="desc">
          When you’re ready to go beyond prototyping in Figma, Webflow is
          ready to help you bring your designs to life — without coding them.
        </p>
        <div class="pricing-wrap">
          <div class="mask"></div>
          {PRICES.map((item, index) => {
            return <div class={cn("pricing-item", { dark: index === 1 })}>
              <div class="pricing-title">
                <span>{`$${item.price}${index === 2 ? '+' : ''}`}</span>
                <span>{item.label}</span>
              </div>
              <div class="pricing-info">{item.title}</div>
              <p class="pricing-desc">
                {item.description}
              </p>
              <ul class="pricing-list">
                {item.listValues.map((point, i) => {
                  return <li>
                    <img src={point.isInclude ? "/assets/Pointer.svg" : "/assets/Pointer_2.svg"} alt={point.label} />
                    <span>{point.label}</span>
                  </li>
                })}
              </ul>
              <div class="button">
                <button class="pricing-button">Get started</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default PricePage;
