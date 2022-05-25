import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
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
import { getEvents, login } from '../services/Server';
import Wishes from './Views/Wishes';

function App() {
  const loadGames = async () => {
    const res = await getEvents();
    console.log(res);
  };

  const doLogin = async () => {
    const res = await login('Curie', 'password');
    if (!res.ok) return;
    const { token } = res.response;
    console.log(token);
    const data = jwtDecode(token);
    console.log(data);
  };

  useEffect(() => {
    doLogin();
    // login('riemann', 'password').then(console.log).catch(console.log);
    // loadGames();
  }, []);

  return (
    <Router>
      <Header>
        {/* <Routes>
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/games" element={<ReadyGames />} />
          <Route path="/admin/createGame" element={<EditGame />} />
          <Route path="/admin/editGame/:id" element={<EditGame />} />
          <Route path="/game/:id" element={<GameMain />} />
          <Route path="/joinGame/:id" element={<Main />} />
          <Route path="/myWishes/:id" element={<Wishes />} />
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
