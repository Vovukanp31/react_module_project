import React from "react";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "react-bootstrap";

const PaginationForm = () => {

    const pageParam = "page";

    const [searchParams, setSearchParams] = useSearchParams();
    const currentNumberOfPages = Number(searchParams.get(pageParam));

    const changeNumberOfPages = (number) => {
        if (number <= 0) return;
        setSearchParams({[pageParam]: number});
    };
    const scroll = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Pagination>
                <Pagination.First onClick={() => {
                    changeNumberOfPages(1);
                    scroll()
                }} disabled={currentNumberOfPages <= 1}/>
                <Pagination.Prev onClick={() => {
                    changeNumberOfPages(currentNumberOfPages - 1);
                    scroll()
                }} disabled={currentNumberOfPages <= 1}/>
                <Pagination.Item onClick={() => {
                    changeNumberOfPages(currentNumberOfPages - 10);
                    scroll()
                }}>{(currentNumberOfPages > 10 && currentNumberOfPages - 10) || '-'}</Pagination.Item>
                <Pagination.Ellipsis disabled/>

                <Pagination.Item onClick={() => {
                    changeNumberOfPages(currentNumberOfPages - 2);
                    scroll()
                }}
                                 disabled={currentNumberOfPages <= 2}>{(currentNumberOfPages > 2 && currentNumberOfPages - 2) || '-'}</Pagination.Item>
                <Pagination.Item onClick={() => {
                    changeNumberOfPages(currentNumberOfPages - 1);
                    scroll()
                }}
                                 disabled={currentNumberOfPages <= 1}>{(currentNumberOfPages > 1 && currentNumberOfPages - 1) || '-'}</Pagination.Item>
                <Pagination.Item active>{currentNumberOfPages}</Pagination.Item>
                <Pagination.Item onClick={() => {
                    changeNumberOfPages(currentNumberOfPages + 1);
                    scroll()
                }}
                                 disabled={currentNumberOfPages >= 500}>{(currentNumberOfPages < 500 && currentNumberOfPages + 1) || '-'}</Pagination.Item>
                <Pagination.Item onClick={() => {
                    changeNumberOfPages(currentNumberOfPages + 2);
                    scroll()
                }}
                                 disabled={currentNumberOfPages >= 499}>{(currentNumberOfPages < 499 && currentNumberOfPages + 2) || '-'}</Pagination.Item>

                <Pagination.Ellipsis disabled/>
                <Pagination.Item onClick={() => {
                    changeNumberOfPages(currentNumberOfPages + 10);
                    scroll()
                }}
                                 disabled={currentNumberOfPages >= 490}>{(currentNumberOfPages <= 490 && currentNumberOfPages + 10) || '-'}</Pagination.Item>
                <Pagination.Next onClick={() => {
                    changeNumberOfPages(currentNumberOfPages + 1);
                    scroll()
                }} disabled={currentNumberOfPages === 500}/>
                <Pagination.Last onClick={() => {
                    changeNumberOfPages(500);
                    scroll()
                }}/>
            </Pagination>
        </>
    );
};
export default PaginationForm;