import React from 'react';
import { FaHeart } from 'react-icons/fa';

import './index.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer--desenvolvido-por'>Desenvolvido com <FaHeart /> por <a target="_blank" rel="noopener noreferrer" href='https://deyvid.dev.br'>Deyvid.dev.br</a></p>
    </footer>
  );
}

export default Footer;