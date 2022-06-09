import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Footer } from './components/Footer';
import Message from './components/Message';
import { Clickhandler } from './components/Clickhandler';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { StyleSheet } from './components/StyleSheet';

//TO GENERATE REACT APP FROM SCRATCH, type in terminal "npx create-react-app (name of the folder); EXAMPLE: npx create-react-app curriculum-system
//NOTE: CAPITAL LETTERS AND WHITE SPACES FOR NAMING OF FOLDER ARE NOT ALLOWED"

//to run this, type "cd ./name-of-the-folder-you-created"; EXAMPLE: cd ./curriculum-system
//then after getting into the folder, type "npm start"; 

function App() 
{
  return (
    <div className="App">
      {/* <Message></Message>

      <Greet name="josh" pet="chewy"/>
      <Greet name="juliana" pet="zoey">
        <button>ACTION</button>
      </Greet>

      <Footer>
        <p>FOOOOT</p>
      </Footer>

      <Clickhandler/>
      
      <ParentComponent/> 
      <UserGreeting/>
      <NameList/> */}
      <StyleSheet/>
    </div>
  );
}

export default App;
