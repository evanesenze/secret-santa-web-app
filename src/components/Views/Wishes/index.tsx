import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEvent } from '../../../services/Server';
import './style.css';

const Wishes: FC = () => {
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

  const saveWishes = () => {
    nav(`../game/${id}`);
  };

  return (
    <div className="wishes_content">
      {!eventExist && <div>Игра с ID {id} не найдена </div>}
      {!gameData && eventExist && <div>Загрузка...</div>}
      {gameData && (
        <>
          <h2 className="wishes_content__title">Мое пожелание</h2>
          <form className="wishes_content__form">
            <div className="wishes_content__inputs_group">
              <div className="wishes_content__group_item">
                <label style={{ marginRight: '10%' }} className="default_input__label">
                  Имя
                  <br />
                  <input placeholder="Введите имя" className="default_input" />
                </label>
              </div>
              <div className="wishes_content__group_item">
                <label className="default_input__label">
                  Номер телефона
                  <br />
                  <input placeholder="Введите номер телефона" className="default_input" />
                </label>
              </div>
            </div>
            <div className="wishes_content__inputs_group">
              <div className="wishes_content__group_item">
                <label style={{ marginBottom: '5%' }} className="default_input__label">
                  Адрес проживания
                  <br />
                  <input style={{ width: '100%' }} placeholder="Край/Область/Регион" className="default_input" />
                </label>
              </div>
              <div className="wishes_content__group_item">
                <label style={{ marginBottom: '5%' }} className="default_input__label">
                  <br />
                  <input style={{ width: '100%' }} placeholder="Город" className="default_input" />
                </label>
              </div>
              <div className="wishes_content__group_item">
                <label style={{ marginBottom: '5%' }} className="default_input__label">
                  <br />
                  <input style={{ width: '100%' }} placeholder="Адрес" className="default_input" />
                </label>
              </div>
              <div className="wishes_content__group_item">
                <div className="wishes_content__inputs_group">
                  <div className="wishes_content__group_item">
                    <label style={{ marginBottom: '5%' }} className="default_input__label">
                      <br />
                      <input style={{ width: '100%' }} placeholder="Квартира" className="default_input" />
                    </label>
                  </div>
                  <div className="wishes_content__group_item">
                    <label style={{ marginBottom: '5%' }} className="default_input__label">
                      <br />
                      <input style={{ width: '100%' }} placeholder="Почтовый индекс" className="default_input" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="wishes_content__group_item">
              <label className="default_input__label">
                Пожелание по подарку
                <br />
                <textarea
                  placeholder="Например, На новый год я хочу получить сертификат в спа-салон"
                  style={{ width: '100%', height: '100px', resize: 'none', padding: '15px 15px' }}
                  className="default_input"
                />
              </label>
            </div>
            <div className="wishes_content_save_btn_wrapper">
              <button type="button" onClick={saveWishes} className="default__btn wishes_content_save_btn">
                Сохранить
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Wishes;
