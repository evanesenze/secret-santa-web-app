import React, {FC} from "react";

import './style.css';

const CreateGame:FC = () => {
    return(<div className="games_view">
        <div className="button_back"></div>
        <h1 className="title">Создание игры</h1>
        <section className="inputs_container">
            <div className="input_zone">
                <p>Название игры</p>
                <input className="input_title" type='text' placeholder="Например, Тайный Санта 2022"></input>
            </div>
            <div className="set_date_zone">
                <p>Дата жеребьёвки</p>
                <input className="input_date" type="date" placeholder="дд/мм/гггг"></input>
            </div>
            <div className="send_date_zone">
                <p>Отправить подарок до</p>
                <input className="input_date" type="date" placeholder="дд/мм/гггг"></input>
            </div>
        </section>
        <section className="recommended_cost_container">
            <div className="recommended_cost">
                <p>Рекомендуемая стоимость подарка</p>
                <span>При включении опции участникам смогут увидеть рекомендуемую стоимость, для получения подарка</span>
            </div>
            <label className="switch">
                    <input type='checkbox'></input>
                    <span className="slider_round"></span>
            </label>
            <div className="gift_cost">
                <p>Сумма подарка</p>
                <input className="input_cost" type="number"></input>
                <select className='select_currency' name="currency" id="currency">
                    <option className="currency">Руб</option>
                </select>
            </div>
        </section>
        <div className="button">
            <button className="create_button">создать</button>
        </div>
    </div>)
};

export default CreateGame;