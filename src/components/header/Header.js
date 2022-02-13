import React from 'react';

import {DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

import css from './header.module.css';
import UserInfo from "../userInfo/UserInfo";
import GenresDropdown from "../genresDropdown/genresDropdown";


const Header = () => {

    const homepage = useNavigate();

    return (
        <div className={css.header}>

            <div className={css.actionPart}>
                <img src="https://i.postimg.cc/W1yqVHJV/image.png" alt="webLogo" onClick={() => {
                    homepage('/');
                }}/>

                <DropdownButton id="dropdown-basic-button" title="Genres" className={css.headerBtn}>
                        <GenresDropdown/>
                </DropdownButton>

            </div>
            <UserInfo/>
        </div>
    );
};

export default Header;