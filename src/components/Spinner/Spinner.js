import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
  return (
    <p className="spinner">{props.message}</p>
  )
};

export default Spinner;

