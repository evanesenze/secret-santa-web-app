import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Back } from '../assets/back.svg';

const ContentLayout: FC = ({ children }) => {
  const nav = useNavigate();
  return (
    <div className="main_content__layout">
      <div className="main_content__layout_header">
        <Back onClick={() => nav(-1)} />
        {/* <div></div> */}
        {/* <button className="default__btn">Покинуть</button> */}
      </div>
      <div className="main_content_layout_content">{children}</div>
    </div>
  );
};

export default ContentLayout;
