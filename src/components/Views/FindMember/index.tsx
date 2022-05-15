import React, {FC} from "react";

import './style.css';

const FindMember:FC = () => {
    return(<div className='games_view'>
        <div className="button_back"></div>
        <section className="container">
            <div className="info_window">
                <p className="info_numbers">19.12</p>
                <span className="info_description">Дата жеребьёвки</span>
            </div>
            <div className="info_window">
                <p className="info_numbers">31.12</p>
                <span className="info_description">Отправить подарки до</span>
            </div>
            <div className="info_window">
                <p className="info_numbers">4</p>
                <span className="info_description">Кол-во участников</span>
            </div>
        </section>
        <section className="container_fullname">
            <input className="input_fullname" type='text' placeholder='введите ФИО участника'></input>
            <button className="button_find"></button>
        </section>
        <section className="container_members">
            <div className="member">
                <div className="member_1"></div>
                <span>ФИО уч.1</span>
            </div>
            <div className="member">
                <div className="member_2"></div>
                <span>ФИО уч.2</span>
            </div>
            <div className="member">
                <div className="member_3"></div>
                <span>ФИО уч.3</span>
            </div>
            <div className="member">
                <div className="member_4"></div>
                <span>ФИО уч.4</span>
            </div>
        </section>
    </div>
    )
};

export default FindMember;