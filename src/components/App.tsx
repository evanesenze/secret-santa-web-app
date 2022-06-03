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
import FindMember from './Views/FindMember';
import GameWasCreated from './Views/GameWasCreated';
import DesignatedUser from './Views/DesignatedUser';

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

  const saveUser = async (token: string) => {
    const { exp, UserID, email, role } = jwtDecode<any>(token);
    const date = new Date(exp * 1000);
    setCookie('token', token, { expires: date, path: '/' });
    let user: IUser = {
      UserID,
      email,
      role,
      token,
    };
    console.log(user);
    serverController.setUserParams(user);
    const userInfo = await serverController.getUserInfo(user.UserID);
    if (!userInfo) throw new Error('Wrong token');
    if (userInfo.ok) user = { ...user, ...userInfo.response };
    setUser(user);
    setWaitAuth(false);
  };

  const handleAuth = async (username: string, password: string) => {
    const res = await serverController.login(username, password).catch(console.log); // 'Curie', 'password'
    console.log(res);
    if (!res.ok) return;
    const { token } = res.response;
    saveUser(token);
  };

  useEffect(() => {
    if (token) saveUser(token);
    // const a = new ServerController('', 'user');
    // login('riemann', 'password').then(console.log).catch(console.log);
    // loadGames();
  }, []);

  useEffect(() => {}, [user]);

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
        </Routes>
        {/* <Authorization /> */}
        {/* <GameMain /> */}
        {/* <Wishes /> */}
        {/* <Main /> */}
        {/* <GameWasCreated /> */}
        {/* <GameWasCreatedWithMembers /> */}
        {/* <Games /> */}
        {/* <ReadyGames /> */}
        {/* <Home /> */}
        {/* <DesignatedUser /> */}
        {/* <FindMember /> */}
      </Header>
    </Router>
  );
}

export default App;
