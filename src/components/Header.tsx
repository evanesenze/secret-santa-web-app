import React, { FC } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import ContentLayout from './ContentLayout';
import { useLocation } from 'react-router-dom';
import Authorization from './Views/Authorization';

interface IHeaderProps {
  user: IUser | undefined;
  waitAuth: boolean;
  handleAuth(login: string, password: string): void;
}

const Header: FC<IHeaderProps> = ({ children, user, waitAuth, handleAuth }) => {
  const nav = useLocation();
  const withoutLayout = ['/', '/admin', '/login'];
  // const d = nav.pathname.split('/')[1];

  const getContent = () => {
    const d = nav.pathname.split('/')[1];
    if (!user) return waitAuth ? <div>Загрузка...</div> : <Authorization handleAuth={handleAuth} />;
    if (d === 'joinGame') return children;
    return withoutLayout.includes(nav.pathname) ? children : <ContentLayout>{children}</ContentLayout>;
  };

  return (
    <React.Fragment>
      <header className="main_header">
        <div className="main_header__logo">
          <Logo />
        </div>
        <div className="main_header__sign_up">{<span>{user?.role ?? 'Вход'}</span>}</div>
      </header>
      <div className="main_content">{getContent()}</div>
    </React.Fragment>
  );
};

export default Header;
