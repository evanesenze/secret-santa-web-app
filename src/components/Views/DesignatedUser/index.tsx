import React from "react";
import ContentLayout from "../../ContentLayout";
import playerIcon from '../../../assets/playerIcon.png';
import './style.css';

const DesignatedUser:React.FC = () => {
    return (<ContentLayout>
        <div className="designated_user_content">
            <div className="designated_user_content_info">
                <div className='default_player_card'>
                    <div className='default_player_card__image'>
                        <img src={playerIcon}/>
                    </div>
                    <div className='default_player_card__name'>Игрок 1</div>
                </div>
                <div className="designated_user_content_info_text">
                    <div style={{width: '100%', marginBottom: '1%'}} className="default_input">
                        <span>на Новый год я хочу получить сертификат в спа салон</span> 
                    </div>
                    <div style={{width: '100%'}} className="default_input">
                        <span>г. Екатеринбург ул. Краснолесья 133, тел. 892212345678</span>
                    </div>
                </div>
            </div>
        </div>
    </ContentLayout>)
}

export default DesignatedUser;