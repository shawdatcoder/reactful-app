import logo from './logo.svg';
import './App.css';
import Game from './GameFx.js';
import {Clock,Clockclass } from './Playground';
import {ShowOutcomes} from './GambleHelper';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <div>hello</div>
       <Game /> */}
       {/* <Clock date={new Date()}/> */}
       <Clockclass ></Clockclass>
       <ShowOutcomes/>
    </div>
  );
}

export default App;
