import './App.css';
import Navbar from './components/Navbar';
import Mycard from './components/Mycard';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Welcome to My live score app</h1>
      <Mycard/>
    </div>
  );
}

export default App;
