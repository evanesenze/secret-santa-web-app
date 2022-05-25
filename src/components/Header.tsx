import React, { FC } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import ContentLayout from './ContentLayout';
import { useLocation } from 'react-router-dom';

const Header: FC = ({ children }) => {
  const nav = useLocation();
  const withoutLayout = ['/', '/admin'];

  return (
    <React.Fragment>
      <header className="main_header">
        <div className="main_header__logo">
          <Logo />
        </div>
        <div className="main_header__sign_up">
          <span>sign up</span>
        </div>
      </header>
      <div className="main_content">{withoutLayout.includes(nav.pathname) ? children : <ContentLayout>{children}</ContentLayout>}</div>
    </React.Fragment>
  );
};

export default Header;
