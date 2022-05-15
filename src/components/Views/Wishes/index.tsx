import React, { FC } from 'react';
import ContentLayout from '../../ContentLayout';
import './style.css';
const Wishes: FC = () => {
  return (
    <ContentLayout>
      <div className="wishes_content">
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
            <button className="default__btn wishes_content_save_btn">Сохранить</button>
          </div>
        </form>
      </div>
    </ContentLayout>
  );
};

export default Wishes;