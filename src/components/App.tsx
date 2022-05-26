import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Header from './Header';
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
import Wishes from './Views/Wishes';
import { ServerController } from '../services/ServerController';

function App() {
  const [{ token }, setCookie] = useCookies(['token']);
  const [waitAuth, setWaitAuth] = useState(!!token);
  const [user, setUser] = useState<IUser>();
  const [serverController] = useState<IServerController>(new ServerController());

  const loadGames = async () => {
    if (!user) throw new Error('No user');
    const res = await serverController.getEvents();
    console.log(res);
  };

  // useEffect(() => {
  //   loadGames();
  // }, [user]);

  const saveUser = (jwtToken: string) => {
    setWaitAuth(false);
    const data = jwtDecode<IUser>(jwtToken);
    data.token = jwtToken;
    data.role = 'user';
    serverController.setUserParams(data);
    if (!data) throw new Error('Wrong token');
    setUser(data);
  };

  const handleAuth = async (username: string, password: string) => {
    const res = await serverController.login(username, password).catch(console.log); // 'Curie', 'password'
    if (!res.ok) return;
    const { token } = res.response;
    const date = new Date();
    date.setDate(date.getDate() + 1);
    setCookie('token', token, { expires: date });
    saveUser(token);
  };

  useEffect(() => {
    if (token) saveUser(token);
    // const a = new ServerController('', 'user');
    // login('riemann', 'password').then(console.log).catch(console.log);
    // loadGames();
  }, []);

  return (
    <Router>
      <Header user={user} waitAuth={waitAuth} handleAuth={handleAuth}>
        <Routes>
          {user?.role === 'admin' && (
            <>
              <Route path="/admin" element={<Home />} />
              <Route path="/admin/games" element={<ReadyGames serverController={serverController} user={user} />} />
              <Route path="/admin/createGame" element={<EditGame serverController={serverController} user={user} />} />
              <Route path="/admin/editGame/:id" element={<EditGame serverController={serverController} user={user} />} />
            </>
          )}
          {!!user && (
            <>
              <Route path="/game/:id" element={<GameMain serverController={serverController} user={user} />} />
              <Route path="/joinGame/:id" element={<Main serverController={serverController} user={user} />} />
              <Route path="/myWishes/:id" element={<Wishes serverController={serverController} user={user} />} />
              <Route path="/" element={<Main serverController={serverController} user={user} />} />
            </>
          )}
          {/* <Route element={<div>Not Found</div>} /> */}
        </Routes>
        {/* <Authorization /> */}
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
