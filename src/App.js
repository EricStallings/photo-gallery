import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherCard from './components/weatherCard'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <WeatherCard />
      </header>
    </div>
  );
}

export default App;
