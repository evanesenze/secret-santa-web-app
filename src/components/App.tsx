import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Views/Main';
import Home from './Views/Home';
import Games from './Views/Games';
import ReadyGames from './Views/ReadyGames';
import Wishes from './Views/Wishes';
import GameMain from './Views/GameMain';
import DesignatedUser from './Views/DesignatedUser';
import { deleteEvent, editEvent, getEvents, saveEvent } from '../services/Server';

import Create from './Views/Create';

function App() {
  const f = async () => {
    const res = await getEvents();
    console.log(res);
  };

  const f2 = async () => {
    const event: IEvent = {
      description: 'test22',
      endEvent: new Date(),
      endRegistration: new Date(),
      reshuffle: true,
      sendFriends: false,
      sumPrice: 199,
      tracking: false,
    };
    const res = await saveEvent(event);
    console.log(res);
  };

  const f3 = async () => {
    const res = await deleteEvent('df0c7021-397c-40ff-883c-3455035a9264');
    console.log(res);
  };

  const f4 = async () => {
    const event: IExistEvent = {
      description: 'test123123',
      endEvent: new Date(),
      endRegistration: new Date(),
      id: 'e18d10ec-7ba9-436d-bf3e-1154b637a431',
      reshuffle: true,
      sendFriends: true,
      sumPrice: 3000,
      tracking: true,
    };
    const res = await editEvent(event);
    console.log(res);
  };

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
