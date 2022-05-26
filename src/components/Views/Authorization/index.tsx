import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './style.css';

interface IAuthorizationProps {
  handleAuth(login: string, password: string): void;
}

interface IAuthorizationForm {
  login: string;
  password: string;
}

const Authorization: React.FC<IAuthorizationProps> = ({ handleAuth }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAuthorizationForm>({ mode: 'onBlur' });

  const submit: SubmitHandler<IAuthorizationForm> = ({ login, password }) => {
    handleAuth(login, password);
  };

  return (
    <div className="authorization_box">
      <h1 className="authorization_title">Авторизация</h1>
      <form className="" onSubmit={handleSubmit(submit)}>
        <section className="constituents_of_authorization">
          <div className="login_components">
            <label className="block login">
              Логин
              <input className="input_text" placeholder="Введите логин" {...register('login', { required: true })} />
            </label>
            {!!errors.login && <span>Обязательное поле</span>}
          </div>
          <div className="password_components">
            <label className="block password">
              Пароль
              <input className="input_text" type="password" placeholder="Введите пароль" {...register('password', { required: true })} />
            </label>
            {!!errors.password && <span>Обязательное поле</span>}
          </div>
          <div className="btn_join">
            <button type="submit" className="log_in">
              Войти в систему
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Authorization;
