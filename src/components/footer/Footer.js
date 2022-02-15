import React from 'react';

import css from './footer.module.css'

const Footer = () => {

    return (
        <div className={css.footer}>
            <div>Made by Volodymyr Papeta</div>
            <div className={css.apiLink}><a href="https://www.themoviedb.org/" target={'_blank'}>API</a></div>
        </div>
    );
};

export default Footer;