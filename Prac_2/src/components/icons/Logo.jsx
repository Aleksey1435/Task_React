import React from 'react';

const Logo = ({ ...props }) => {
  return (
    <img src="/assets/Logo.png" {...props} alt="logo" />
  );
};

export default Logo;
