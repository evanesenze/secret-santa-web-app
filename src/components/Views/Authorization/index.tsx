import React from 'react';
import ContentLayout from '../../ContentLayout';
import './style.css';

const Authorization: React.FC = () => {
    return (
        <div className='authorization_box'>
            <h1 className='authorization_title'>Авторизация</h1>
            <form className='' action=''>
                <section className='constituents_of_authorization'>
                    <div className='login_components'>
                        <label className='block login'>Логин
                            <input className='input_text' type='text' placeholder='Введите логин'></input>
                        </label>
                    </div> 
                    <div className='password_components'>
                        <label className='block password'>Пароль
                            <input className='input_text' type='password' placeholder='Введите пароль'></input>
                        </label>
                    </div>
                    <div className='btn_join'>
                    <input type='button' className='log_in' value='Войти в систему'></input>              
                    </div>
                </section>
            </form>
        </div>
    );
}

export default Authorization;