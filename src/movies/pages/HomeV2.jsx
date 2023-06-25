/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, Skeleton } from "antd";
import ListMovies from "../components/ListMovies";
import PaginationMovies from "../components/Pagination";
import { useSelector, useDispatch } from 'react-redux';
import { getRequestDataHome } from "../actions/home";

// eslint-disable-next-line react-refresh/only-export-components
const HomeMovies = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequestDataHome(page));
    }, [dispatch, page]);


    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim xem nhieu"
        >
            <Row>
                <Col span={24}>
                    
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(HomeMovies);