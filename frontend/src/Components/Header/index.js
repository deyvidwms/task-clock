import React, { useState } from 'react';

import { FaBars, FaPlus, FaTimes } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";


import './index.css';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleToggleMenu = () => {
    const element = document.getElementsByClassName("button-menu")[0];
    const showMenu = element.getAttribute("data-toggle").indexOf("false") !== -1 ? true : false;
    setToggleMenu(showMenu);
  }

  return (
    <header className='header'>

      <h1 className='title'>TaskClock</h1>
      
      <div className="header--button-menu">
        <div className="button-menu" data-toggle={toggleMenu} onClick={ () => handleToggleMenu() } >
          { toggleMenu ? (<FaBars />) : (<FaTimes />) }
        </div>
      </div>

      <div className={toggleMenu ? "header--menu" : "header--menu active"}>
        <div className="options--add-task">
          <p> <FaPlus /> Nova tarefa </p>
        </div>
        <div className="options--pomodoro">
          <p> <GiTomato /> Pomodoro </p>
        </div>
      </div>

    </header>
  );
}

export default Header;