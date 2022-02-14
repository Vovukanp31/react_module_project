import React from 'react';

import {Pagination} from "react-bootstrap";
import {Link, useLocation, useSearchParams} from "react-router-dom";


const Paginate = ({totalPages}) => {

    const [params] = useSearchParams();
    console.log(params)
    return (
        <>
            {/*<Pagination>*/}
            {/*    {<Pagination.First />}*/}
            {/*   /*/}
            {/*    <Pagination.Item>{}</Pagination.Item>*/}
            {/*    <Pagination.Ellipsis />*/}


            {/*    /!*<Pagination.Item to={`?page=${+nextStep.get('page') - 2}`} disabled={+page <= 2}>{+page - 2}</Pagination.Item>*!/*/}
            {/*    /!*<Pagination.Item to={`?page=${+nextStep.get('page') - 2}`} disabled={+page <= 1}>{+page - 1}</Pagination.Item>*!/*/}
            {/*    /!*<Pagination.Item active>{page}</Pagination.Item>*!/*/}
            {/*    <Pagination.Item >{}</Pagination.Item>*/}

            {/*    <Pagination.Ellipsis />*/}
            {/*    <Pagination.Item>{20}</Pagination.Item>*/}
            {/*    <Pagination.Next />*/}
            {/*    <Pagination.Last />*/}
            {/*</Pagination>*/}
            <button onClick={() => {<Link> to={`?page=${+params.get('page') + 10}`}</Link>}}>aca</button>

            <button onClick={() => {console.log(<Link to={`?page=${+params.get('page') + 10}`}/>)}}></button>

        </>
    );
};

export default Paginate;