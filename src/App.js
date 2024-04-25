
import './App.css';
import Navbar from './components/navBar/navBar';
import About from './components/about/about'
import Skills from './components/skills/skills';
import Portfolio from './components/protolio/portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Navbar/>
     <About/>
     <Skills/>
     
     <Portfolio/>

      </header>
    </div>
  );
}

export default App;
