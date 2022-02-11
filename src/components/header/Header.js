import React from 'react';

import {Dropdown, DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";

import css from './header.module.css';
import UserInfo from "../userInfo/UserInfo";


const Header = () => {

    const homepage = useNavigate();

    return (
        <div className={css.header}>

            <div className={css.actionPart}>
                <img src="https://i.postimg.cc/QMG08xWX/image.png" alt="" onClick={() => {
                    homepage('/');
                }}/>

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