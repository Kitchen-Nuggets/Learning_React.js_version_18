import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Footer } from './components/Footer';
import * as React from 'react';

function App() 
{
  return (
    <div className="App">
      <Greet name="josh" pet="chewy"/>
      <Greet name="juliana" pet="zoey">
        <button>ACTION</button>
      </Greet>
      <Footer>
        <p>FOOOOT</p>
      </Footer>
    </div>
  );
}

export default App;
