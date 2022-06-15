import React, { FC } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import ContentLayout from './ContentLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import Authorization from './Views/Authorization';
import Loader from './Loader';

interface IHeaderProps {
  user: IUser | undefined;
  waitAuth: boolean;
  handleAuth(login: string, password: string): Promise<boolean>;
  handleExitGame(eventId?: string): Promise<boolean>;
  handleLogout(): void;
}

const withoutLayout = ['/', '/admin', '/login'];

const Header: FC<IHeaderProps> = ({ children, user, waitAuth, handleAuth, handleExitGame, handleLogout }) => {
  const location = useLocation();
  const nav = useNavigate();

  const getContent = () => {
    const endPoint = location.pathname.split('/')[1];
    if (!user) return waitAuth ? <Loader /> : <Authorization handleAuth={handleAuth} />;
    if (endPoint === 'joinGame') return children;
    return withoutLayout.includes(location.pathname) ? (
      children
    ) : (
      <ContentLayout endPoint={endPoint} user={user} handleExitGame={handleExitGame}>
        {children}
      </ContentLayout>
    );
  };

  return (
    <React.Fragment>
      <header className={['main_header', !user && !waitAuth ? 'header__black' : null].join(' ')}>
        <div className="main_header__logo">
          <Logo onClick={() => nav('../')} />
        </div>
        {!!user && (
          <div className="main_header__sign_up" onClick={handleLogout}>
            {<span>{user?.name ?? user?.role ?? 'Ошибка'}</span>}
          </div>
        )}
      </header>
      <div className="main_content">{getContent()}</div>
    </React.Fragment>
  );
};

export default Header;
