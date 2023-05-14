import { useEffect } from 'react';
import './App.css';
import bird from "../src/assets/birds.png"
import ball from "../src/assets/Flying ball.png"
import children from "../src/assets/children.png"
import flowers from "../src/assets/flowers.png"
import libary from "../src/assets/library.png"
import mushrooms from "../src/assets/mushrooms.png"
import beach from "../src/assets/the beach.png"
import wolf from "../src/assets/wolf.png"

function App() {

  

  return (
    <div className='conteiner'>
      <div className='logo'>
        <h1>Slide Show</h1>
      </div>
      <div className='carusel'>
        <div className='item'>
          <div className='image'>
            <img src={ ball } />
          </div>
          <div className='info'>
            <span className="name">1</span>
            <span className="price">ball</span>
          </div>
        </div>
        <div className='item'>
          <div className='image'>
            <img src={ bird } />
          </div>
          <div className='info'>
            <span className="name">2</span>
            <span className="price">birds</span>
          </div>
        </div>
        <div className='item'>
          <div className='image'>
          <img src={ children } />
          </div>
          <div className='info'>
            <span className="name">3</span>
            <span className="price">children</span>
          </div>
        </div><div className='item'>
          <div className='image'>
          <img src={ flowers } />
          </div>
          <div className='info'>
            <span className="name">4</span>
            <span className="price">flowers</span>
          </div>
        </div>
        <div className='item'>
          <div className='image'>
          <img src={ libary } />
          </div>
          <div className='info'>
            <span className="name">5</span>
            <span className="price">library</span>
          </div>
        </div>
        <div className='item'>
          <div className='image'>
          <img src={ mushrooms } />
          </div>
          <div className='info'>
            <span className="name">6</span>
            <span className="price">mushrooms</span>
          </div>
        </div>
        <div className='item'>
          <div className='image'>
          <img src={ beach } />
          </div>
          <div className='info'>
            <span className="name">7</span>
            <span className="price">beach</span>
          </div>
        </div>
        <div className='item'>
          <div className='image'>
          <img src={ wolf } />
          </div>
          <div className='info'>
            <span className="name">8</span>
            <span className="price">wolf</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
