import React from 'react';
import Header from './Header';
import Main from './Views/Main';
import Home from './Views/Home';
import Games from './Views/Games';
import ReadyGames from './Views/ReadyGames';

function App() {
  return (
    <Header >
      <ReadyGames />
      {/* <Main /> */}
    </Header> 
  );
}

export default App;
