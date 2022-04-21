import React from 'react';
import Header from './Header';
import Main from './Views/Main';
import Home from './Views/Home';
import Games from './Views/Games';
import ReadyGames from './Views/ReadyGames';
import Wishes from './Views/Wishes';
import GameMain from './Views/GameMain';
import DesignatedUser from './Views/DesignatedUser';

function App() {
  return (
    <Header >
      {/* <DesignatedUser /> */}
      {/* <GameMain /> */}
      {/* <Wishes /> */}
      {/* <ReadyGames /> */}
      <Main />
    </Header> 
  );
}

export default App;
