import React from 'react';
import { FaHeart } from 'react-icons/fa';

import './index.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer--desenvolvido-por'>Desenvolvido com <FaHeart /> por Deyvid.dev</p>
    </footer>
  );
}

export default Footer;