import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEvents, deleteEvent } from '../../../services/Server';
import cardImage from '../../../assets/snowman.png';

import './style.css';

const ReadyGames: FC = () => {
  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    const events = await getEvents();
    setEvents(events.response);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const removeEvent = (id: string) => {
    deleteEvent(id)
      .then(() => loadEvents())
      .then(() => alert('delete'));
  };

  return (
    <div className="main_content__layout">
      <div className="rectangle">
        <h1 className="games">Игры</h1>
        <Link to="/admin/createGame" className="create_game_button">
          создать
        </Link>
      </div>
      <div className="container">
        {events.map((item: any) => (
          <div key={item.id} className="default_game_card" onClick={() => removeEvent(item.id)}>
            <img className="default_game_card__img" src={cardImage} />
            <span className="default_game_card__titile">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadyGames;
