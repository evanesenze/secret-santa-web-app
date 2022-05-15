import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Views/Main';
import Home from './Views/Home';
import Games from './Views/Games';
import ReadyGames from './Views/ReadyGames';
import GameWasCreated from './Views/GameWasCreated';
import GameWasCreatedWithMembers from './Views/GameWasCreatedWithMembers';
import FindMember from './Views/FindMember';
import CreateGame from './Views/CreateGame';

import Create from './Views/Create';

function App() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/games" element={<ReadyGames />} />
          <Route path="/admin/createGame" element={<Create />} />
          <Route path="/" element={<Main />} />
        </Routes>
        {/* <DesignatedUser /> */}
        {/* <GameMain /> */}
        {/* <Wishes /> */}
        {/* <Main /> */}

        {/* <Games /> */}
        {/* <ReadyGames /> */}
        {/* <Home /> */}
      </Header>
    </Router>
  );
}

export default App;
