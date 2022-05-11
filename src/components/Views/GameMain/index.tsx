import React, { FC } from 'react';
import ContentLayout from '../../ContentLayout';
import playerIcon from '../../../assets/playerIcon.png';
import './style.css';

const GameMain: FC = () => {
  return (
    <ContentLayout>
      <div className="game_main_content">
        <div className="info_card__group">
          <div className="default_info_card">
            <div className="default_info_card__title">2000</div>
            <div className="default_info_card__description">Рекомендуемая стоимость</div>
          </div>
          <div className="default_info_card">
            <div className="default_info_card__title">19.12</div>
            <div className="default_info_card__description">Дата жеребьевки</div>
          </div>
          <div className="default_info_card">
            <div className="default_info_card__title">31.12</div>
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
      </div>
    </ContentLayout>
  );
};

export default GameMain;
