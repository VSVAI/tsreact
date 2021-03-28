import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/main.scss';
function Heading(): React.ReactNode {
    return <h1>My Website Heading</h1>; //this is only for saving from error
}
function App() {
    Heading();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>123</p>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
