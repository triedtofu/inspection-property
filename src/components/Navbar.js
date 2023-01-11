import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import realestatelogo from '../realestatelogo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const imageClick = () => {
    navigate(`/`);
  };

  return (
    <nav>
      <div className={styles.outerBox}>
        <div>
          <img
            src={realestatelogo}
            className={styles.logo}
            alt="loading"
            onClick={() => imageClick()}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
