import React, {FC} from "react";

import './style.css';

const ReadyGames:FC = () => {
    return(<div className="games_view">
        <div className="rectangle">
            <h1 className="games">Игры</h1>
            <button className="games_button">создать</button>
        </div>
        <div className="container">
            <div className="game">
                <div className="game_1">
                    <span>Тайный Санта 2022 20 участников</span>
                </div>
            </div>
            <div className="game">
                <div className="game_2">
                    <span>Тайный Санта 2021 28 участников</span>
                </div>
            </div>
            <div className="game">
                <div className="game_3">
                    <span>Тайный Санта 2020 24 участников</span>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ReadyGames;