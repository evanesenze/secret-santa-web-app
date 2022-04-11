import React, { FC } from "react";
import {ReactComponent as Logo} from '../assets/logo.svg';

const Header:FC = ({children}) => {
    return(<React.Fragment>
        <header className="main_header">
            <div className="main_header__logo"><Logo /></div>
            <div className="main_header__sign_up">
                <span>sing up</span>
            </div>
        </header>
        <div className="main_content">{children}</div>
    </React.Fragment>);
}

export default Header;