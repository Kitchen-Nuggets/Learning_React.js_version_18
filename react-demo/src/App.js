import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Footer } from './components/Footer';
import Message from './components/Message';
import { Clickhandler } from './components/Clickhandler';
import { ParentComponent } from './components/ParentComponent';

function App() 
{
  return (
    <div className="App">
      <Message></Message>
      <Greet name="josh" pet="chewy"/>
      <Greet name="juliana" pet="zoey">
        <button>ACTION</button>
      </Greet>
      <Footer>
        <p>FOOOOT</p>
      </Footer>
      <Clickhandler/>
      <ParentComponent/>
    </div>
  );
}

export default App;
