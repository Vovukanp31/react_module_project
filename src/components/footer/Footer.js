import React from 'react';

import css from './footer.module.css'
import Paginate from "../pagination/Paginate";
import {useParams} from "react-router-dom";

const Footer = () => {

    const{page} = useParams();

    return (
        <div className={css.footer}>
            {page && <Paginate page={page}/>}
        </div>
    );
};

export default Footer;