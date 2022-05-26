import React, { useEffect, useState } from 'react';
import playerIcon from '../../../assets/playerIcon.png';
import { useParams, useNavigate } from 'react-router-dom';
// import { getEvent } from '../../../services/ServerController';
import './style.css';

const GameMain: React.FC<IDefaultProps> = ({ serverController, user }) => {
  const { id } = useParams();
  const [gameData, setGameData] = useState<IExistEvent>();
  const [eventExist, setEventExist] = useState(true);
  const nav = useNavigate();

  const loadGameData = async () => {
    if (!id) return setEventExist(false);
    const event = await serverController.getEvent(id).catch(console.log);
    if (!event.ok) return setEventExist(false);
    console.log(event);
    setGameData(event.response as IExistEvent);
  };

  useEffect(() => {
    if (gameData?.reshuffle) console.log('прошло');
  }, [gameData]);

  useEffect(() => {
    loadGameData();
  }, []);
  // console.log(id);
  return (
    <>
      {!eventExist && <div>Bad</div>}
      {!gameData && eventExist && <div>Загрузка...</div>}
      {gameData && (
        <>
          <div className="info_card__group">
            <div className="default_info_card">
              <div className="default_info_card__title">{gameData.sumPrice ?? 0}</div>
              <div className="default_info_card__description">Рекомендуемая стоимость</div>
            </div>
            <div className="default_info_card">
              <div className="default_info_card__title">{new Date(String(gameData.endRegistration)).toLocaleDateString()}</div>
              <div className="default_info_card__description">Дата жеребьевки</div>
            </div>
            <div className="default_info_card">
              <div className="default_info_card__title">{new Date(String(gameData.endEvent)).toLocaleDateString()}</div>
              <div className="default_info_card__description">Отправить подарки до</div>
            </div>
            <div className="default_info_card">
              <div className="default_info_card__title">{gameData.membersCount ?? 0}</div>
              <div className="default_info_card__description">Кол-во участников</div>
            </div>
          </div>
          <div className="game_main_content__my_wishes">
            <div className="default_input game_main_content__my_wishes_text">
              {user.role === 'user' ? 'на Новый год я хочу получить приставку' : `http://localhost:3000/joinGame/${id}`}
            </div>
          </div>
          {user.role === 'user' && (
            <div className="game_main_content__edit_wishes_btn">
              <button onClick={() => nav(`../myWishes/${id}`)} className="default__btn">
                Редактировать
              </button>
            </div>
          )}
          <div className="game_main_content__players">
            {gameData.memberView.map((item, index) => {
              const { memberView } = item;
              return (
                <div key={index} className="default_player_card">
                  <div className="default_player_card__image">
                    <img src={playerIcon} />
                  </div>
                  <div className="default_player_card__name">{memberView.name}</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default GameMain;
