import logo from './logo.svg'
import './App.css'
import Game from './components/Game/GameFx.js'
import { Clock, Clockclass } from './Playground'
import { ShowOutcomes } from './components/GambleHelper/GambleHelper'
import { GetCount } from './components/GetCount'

function App() {
    return (
        <div className="App container-flex">
            <header className="App-header">
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
            </header>

            <Clockclass></Clockclass>
            <GetCount />
            <ShowOutcomes />
        </div>
    )
}

export default App
