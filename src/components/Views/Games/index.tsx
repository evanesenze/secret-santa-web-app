import React, {FC} from "react";

import './style.css';

const Games:FC = () => {
    return(<div className="games_view">
        <h1 className="games">Игры</h1>
        <button className="games_button">создать</button>
    </div>
    )
};

export default Games;