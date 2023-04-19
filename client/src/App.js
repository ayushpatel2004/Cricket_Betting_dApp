import React from 'react';
import Home from './pages/home/home';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import Player from './pages/player/player';
import Team from './pages/team/team';
import AmountMatch from './pages/amount_team';
import AmountPlayer from './pages/amount_player';
import FAQs from './pages/faqs/faqs';
import './App.css';
import About from './pages/about_us/about';
import Help from './pages/help/help';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/faqs" element={<FAQs/>} />
      <Route exact path="/home/playerbet" element={<Player/>} />
      <Route exact path="/home/teambet" element={<Team/>} />
      <Route exact path="/home/teambet/transactionmatch" element={<AmountMatch/>} />
      <Route exact path="/home/playerbet/transactionplayer" element={<AmountPlayer/>} />
      <Route exact path="/aboutus" element={<About/>} />
      <Route exact path="/help" element={<Help/>} />

    </Routes>
  </>
);

export default App;