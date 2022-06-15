import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Header from './Header';
import Main from './Views/Main';
import Home from './Views/Home';

import ReadyGames from './Views/ReadyGames';
import EditGame from './Views/EditGame';

import GameMain from './Views/GameMain';
import Wishes from './Views/Wishes';
import { ServerController } from '../services/ServerController';

const App: React.FC = () => {
  const [{ token }, setCookie, removeCookie] = useCookies(['token']);
  const [waitAuth, setWaitAuth] = useState(!!token);
  const [user, setUser] = useState<IUser>();
  const [serverController] = useState<IServerController>(new ServerController());

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
    serverController.setUserParams(user);
    const userInfo = await serverController.getUserInfo(user.UserID);
    if (!userInfo) throw new Error('Wrong token');
    if (userInfo.ok) user = { ...user, ...userInfo.response };
    setUser(user);
    setWaitAuth(false);
  };

  const handleAuth = async (username: string, password: string): Promise<boolean> => {
    const res = await serverController.login(username, password).catch(console.error);
    if (!res.ok) {
      alert(res.response?.message);
      return false;
    }
    const { token } = res.response;
    saveUser(token);
    return true;
  };

  const handleExitGame = async (eventId?: string): Promise<boolean> => {
    if (!eventId) {
      alert('Error');
      return false;
    }
    if (!confirm('Покинуть игру?')) return false;
    const res = await serverController.exitGame(eventId).catch(console.error);
    return res.ok;
  };

  const handleLogout = () => {
    if (!confirm('Выйти?')) return;
    removeCookie('token', { path: '/', expires: new Date() });
    setUser(undefined);
  };

  useEffect(() => {
    if (token) saveUser(token);
  }, []);

  return (
    <Router>
      <Header user={user} waitAuth={waitAuth} handleAuth={handleAuth} handleExitGame={handleExitGame} handleLogout={handleLogout}>
        <Routes>
          {user?.role === 'admin' && (
            <>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/admin/games" element={<ReadyGames serverController={serverController} user={user} />} />
              <Route path="/admin/createGame" element={<EditGame serverController={serverController} user={user} />} />
              <Route path="/admin/editGame/:id" element={<EditGame serverController={serverController} user={user} />} />
            </>
          )}
          {!!user && (
            <>
              <Route path="/game/:id" element={<GameMain serverController={serverController} user={user} setUser={setUser} />} />
              <Route path="/joinGame/:id" element={<Main serverController={serverController} user={user} />} />
              <Route path="/myWishes/:id" element={<Wishes serverController={serverController} user={user} />} />
              <Route path="/" element={user.role === 'admin' ? <Home /> : <Main serverController={serverController} user={user} />} />
            </>
          )}
        </Routes>
      </Header>
    </Router>
  );
};

export default App;
