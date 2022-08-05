import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting/Greeting';
import SongList from './components/song/SongList';

function App() {
  return (
    <div>
    <Greeting name="Cuong" age="26"/>
    <SongList />

    </div>
  );
}

export default App;
