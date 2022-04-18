import React, {FC} from "react";

import './style.css';

const Main:FC = () => {
    return(<div className="main_view">
        <span className="main_view__title">Тайный санта</span>
        <div className="main_view__info">
            <span className="main_view__info_text">Вас пригласили участвовать <br/ >в игре “Название игры”</span>
            <button style={{marginTop: '3%'}} className="default__btn">принять</button>
            {/* <button className="default__btn">перейти к игре</button> */}
        </div>
    </div>)
};

export default Main;