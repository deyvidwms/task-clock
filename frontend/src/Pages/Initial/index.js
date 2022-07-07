import React from 'react';
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