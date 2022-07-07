import React from 'react';

import { FaPlus } from "react-icons/fa";

import './index.css';

function Header() {
  return (
    <header className='header'>
      <h1 className='title'>TaskClock</h1>
      <div className="header--options">
        <div className="options--add-task">
          <FaPlus />
        </div>
      </div>
    </header>
  );
}

export default Header;