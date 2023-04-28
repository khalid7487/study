import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  useEffect(()=>{

    fetch("/meta.json")
    .then((response) => response.json())
    .then((meta) => {
      
      const latestVersionDate = meta.version;
      
      //Todo:local storage null hard reload and save into local storage
      //Todo: if local storage  then don't match then hard reload and local storage update

      const version =  localStorage.getItem("version");

      if(version === undefined || version === null){
        localStorage.setItem("version", latestVersionDate);
      }else{
          if(version !== latestVersionDate){
            console.log("already have ")
            localStorage.setItem("version", latestVersionDate);
             window.location.reload(true);
          }
      }
    });
  },[])

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
