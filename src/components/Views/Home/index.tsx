import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home: FC = () => {
  return (
    <div className="home_view">
      <span>Тайный санта</span>
      <Link className="create_button_home" to="/admin/createGame">
        создать
      </Link>
      <Link className="games_button" to="/admin/games">
        игры
      </Link>
    </div>
  );
};

export default Home;
