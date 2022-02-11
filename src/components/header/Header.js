import React from 'react';

import {Dropdown, DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

import css from './header.module.css';
import UserInfo from "../userInfo/UserInfo";




const Header = () => {

    return (
        <div className={css.header}>

            <div className={css.actionPart}>
                <img src="https://i.postimg.cc/3xFLWyDr/webLogo.png" alt=""/>
                <DropdownButton id="dropdown-basic-button" title="Genres" className={css.headerBtn}>
                    <Dropdown.Item> <Link to={'/vova'}>vova</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>

            <UserInfo/>
        </div>
    );
};

export default Header;