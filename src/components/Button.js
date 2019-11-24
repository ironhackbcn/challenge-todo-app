import React from 'react';

const Button = ({ children, myProp }) => {
  return (
    <button onClick={myProp}>
      {children}
    </button>
  );
};

export default Button;