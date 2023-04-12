import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './container/Home';
import Form1 from './container/Form1';
import Result from './container/Result';
import { WrapperContext } from './context/wrappercontext';
// import { Switch } from '@mui/material';

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <WrapperContext> */}
          <Route exact path="/matchinput" element={<Form1/>} />
          <Route exact path="/matchresult" element={<Result/>} />
          {/* </WrapperContext> */}
        </Routes>
    </>
  );
}

export default App;
