import React, { FC } from 'react';
import { ReactComponent as Back } from '../assets/back.svg';

const ContentLayout: FC = ({ children }) => {
  return (
    <div className="main_content__layout">
      <div className="main_content__layout_header">
        <Back />
        <div></div>
        <button className="default__btn">Покинуть</button>
      </div>
      {children}
    </div>
  );
};

export default ContentLayout;
