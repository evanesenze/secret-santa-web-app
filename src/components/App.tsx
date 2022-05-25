import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Authorization from './Views/Authorization';
import Main from './Views/Main';
import Home from './Views/Home';
// import Games from './Views/Games';

import ReadyGames from './Views/ReadyGames';
// import GameWasCreated from './Views/GameWasCreated';
// import GameWasCreatedWithMembers from './Views/GameWasCreatedWithMembers';
// import FindMember from './Views/FindMember';
import EditGame from './Views/EditGame';

// import DesignatedUser from './Views/DesignatedUser';
import GameMain from './Views/GameMain';

function App() {
  return (
    <Router>
      <Header>
        {/* <Routes>
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/games" element={<ReadyGames />} />
          <Route path="/admin/createGame" element={<EditGame />} />
          <Route path="/admin/editGame/:id" element={<EditGame />} />
          <Route path="/game/:id" element={<GameMain />} />
          <Route path="/" element={<Main />} />
        </Routes> */}
        <Authorization />
        {/* <Desig/natedUser /> */}
        {/* <GameMain /> */}
        {/* <Wishes /> */}
        {/* <Main /> */}
        {/* <GameWasCreated /> */}
        {/* <GameWasCreatedWithMembers /> */}
        {/* <FindMember /> */}
        {/* <Games /> */}
        {/* <ReadyGames /> */}
        {/* <Home /> */}
      </Header>
    </Router>
  );
}

export default App;
