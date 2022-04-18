import React, { FC } from "react";
import ContentLayout from "../../ContentLayout";
import './style.css'
const Wishes: FC = () => {

    return(<ContentLayout >
        <div className="wishes_content">
            <h2 className="wishes_content__title">Мое пожелание</h2>
            <form className="wishes_content__form"> 
                <div className="wishes_content__btns_group">
                    <label style={{marginRight: '10%'}} className="default_input__label">Имя<br/>
                        <input placeholder="Введите имя" className="default_input" />
                    </label>
                    <label className="default_input__label">Номер телефона<br/>
                        <input placeholder="Введите номер телефона" className="default_input" />
                    </label>
                </div>
                <label style={{marginBottom: '5%'}} className="default_input__label">Адрес проживания<br/>
                    <input style={{width: '100%'}} placeholder="Введите адрес" className="default_input" />
                </label>
                <label className="default_input__label">Пожелание по подарку<br/>
                    <textarea 
                        placeholder="Например, На новый год я хочу получить сертификат в спа-салон"
                        style={{width: '100%', height: '100px', resize: 'none', padding: '15px 15px'}} 
                        className="default_input" />
                    {/* <input placeholder="Введите адрес" className="default_input" /> */}
                </label>
                <button className="default__btn wishes_content_save_btn">Сохранить</button>

            </form>
        </div>
    </ContentLayout>)
}

export default Wishes;