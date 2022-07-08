import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './index.css';

function Initial() {
  return (
    <div className='container'>
      <Header />
        
      <main className='content'>

        <div className="content--row">

          <div className="row--column clock">
            
            <div className="clock--card">

              <h1>23:40</h1>

            </div>

            <div className="clock--start-counting">
              <button>Começar <FaCaretRight /> </button>
            </div>

          </div>

          <div className="row--column task">

          </div>

        </div>
        
      </main>

      <Footer />
    </div>
  );
}

export default Initial;