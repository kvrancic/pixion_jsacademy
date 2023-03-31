import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomButton.module.css';

const CustomButton = ({ children, ...props }) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomButton;
