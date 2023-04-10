import './App.css';
import Navbar from './components/Navbar';
import Mycard from './components/Mycard';
import { options } from './api/Api';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  },[])


  return (
    <div className="App">
      <Navbar/>
      <h1>Welcome to My live score app</h1>
      <Mycard/>
    </div>
  );
}

export default App;
