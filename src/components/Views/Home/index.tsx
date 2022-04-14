import React, {FC} from "react";

import './style.css';

const Home:FC = () => {
    return(<div className="home_view">
        <span>Тайный санта</span>
        <button className="create_button">создать</button>
        <button className="games_button">игры</button>
    </div>
    )
};

export default Home;