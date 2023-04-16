import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './container/home/Home';
import Form1 from './container/form1/Form1';
import Result from './container/Result';
import { WrapperContext } from './context/wrappercontext';

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/matchinput" element={<Form1/>} />
          <Route exact path="/matchresult" element={<Result/>} />
        </Routes>
    </>
  );
}

export default App;
