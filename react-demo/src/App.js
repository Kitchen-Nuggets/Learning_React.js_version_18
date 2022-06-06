import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Footer } from './components/Footer';
import Message from './components/Message';
import { Clickhandler } from './components/Clickhandler';
import { ParentComponent } from './components/ParentComponent';

//TO CREAT REACT APP FROM SCRATCH, type "npx creat-react-app (name of the file); EXAMPLE: npx create-react-app CurriculumSystem"

//to run this, type "cd ./react-demo" in terminal then type "npm start"

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
