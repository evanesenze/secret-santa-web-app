import React, { useEffect, useState } from 'react';
import playerIcon from '../../../assets/playerIcon.png';
import { useParams } from 'react-router-dom';
import { getEvent } from '../../../services/Server';
import './style.css';

const GameMain: React.FC = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState<IExistEvent>();

  const loadGameData = async () => {
    if (!id) throw Error('no game id');
    const event = await getEvent(id).catch(console.log);
    if (!event.ok) return;
    console.log(event);
    setGameData(event.response as IExistEvent);
  };

  useEffect(() => {
    loadGameData();
  }, []);
  console.log(id);
  return (
    <>
      <div className="info_card__group">
        <div className="default_info_card">
          <div className="default_info_card__title">{gameData?.sumPrice ?? 0}</div>
          <div className="default_info_card__description">Рекомендуемая стоимость</div>
        </div>
        <div className="default_info_card">
          <div className="default_info_card__title">{new Date(String(gameData?.endRegistration)).toLocaleDateString()}</div>
          <div className="default_info_card__description">Дата жеребьевки</div>
        </div>
        <div className="default_info_card">
          <div className="default_info_card__title">{new Date(String(gameData?.endEvent)).toLocaleDateString()}</div>
          <div className="default_info_card__description">Отправить подарки до</div>
        </div>
        <div className="default_info_card">
          <div className="default_info_card__title">0</div>
          <div className="default_info_card__description">Кол-во участников</div>
        </div>
      </div>
      <div className="game_main_content__my_wishes">
        <div className="default_input game_main_content__my_wishes_text">на Новый год я хочу получить приставку</div>
      </div>
      <div className="game_main_content__edit_wishes_btn">
        <button className="default__btn">Редактировать</button>
      </div>
      <div className="game_main_content__players">
        <div className="default_player_card">
          <div className="default_player_card__image">
            <img src={playerIcon} />
          </div>
          <div className="default_player_card__name">Игрок 1</div>
        </div>
        <div className="default_player_card">
          <div className="default_player_card__image">
            <img src={playerIcon} />
          </div>
          <div className="default_player_card__name">Игрок 1</div>
        </div>
      </div>
    </>
  );
};

export default GameMain;
