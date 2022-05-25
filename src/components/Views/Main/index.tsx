import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEvent } from '../../../services/Server';

import './style.css';

const Main: FC = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState<IExistEvent>();
  const [eventExist, setEventExist] = useState(true);
  const nav = useNavigate();

  const loadGameData = async () => {
    if (!id) return setEventExist(false);
    const event = await getEvent(id).catch(console.log);
    if (!event.ok) return setEventExist(false);
    console.log(event);
    setGameData(event.response as IExistEvent);
  };

  useEffect(() => {
    loadGameData();
  }, []);
  console.log(id);

  const acceptGame = () => {
    nav(`../myWishes/${id}`);
  };

  return (
    <div className="main_view">
      <span className="main_view__title">Тайный санта</span>
      <div className="main_view__info">
        {!eventExist && !!id && <div>Игра с ID {id} не найдена </div>}
        {!gameData && eventExist && <div>Загрузка...</div>}
        {gameData && (
          <>
            <span className="main_view__info_text">
              Вас пригласили участвовать <br />в игре “{gameData.description}”
            </span>
            <button style={{ marginTop: '3%' }} className="default__btn" onClick={acceptGame}>
              принять приглашение
            </button>
          </>
        )}
        {/* <button className="default__btn">перейти к игре</button> */}
      </div>
    </div>
  );
};

export default Main;
