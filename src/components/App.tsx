import React from 'react';
import Header from './Header';
import Main from './Views/Main';
import Home from './Views/Home';
import Games from './Views/Games';
import ReadyGames from './Views/ReadyGames';
import GameWasCreated from './Views/GameWasCreated';
import GameWasCreatedWithMembers from './Views/GameWasCreatedWithMembers';
import FindMember from './Views/FindMember';
import CreateGame from './Views/CreateGame';

function App() {
  return (
    <Header >
      <CreateGame />
      {/* <FindMember /> */}
      {/* <Games /> */}
      {/* <GameWasCreated /> */}
      {/* <GameWasCreatedWithMembers /> */}
      {/* <Home /> */}
      {/* <ReadyGames /> */}
      {/* <Main /> */}
    </Header> 
  );
}

export default App;
