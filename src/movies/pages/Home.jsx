/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, Skeleton } from "antd";
import { api } from "../services/api";
import { helpers } from "../helpers";
import ListMovies from "../components/ListMovies";

// eslint-disable-next-line react-refresh/only-export-components
const HomeMovies = () => {
    const [loading, setLoading] = useState(true);
    const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // call 1 lan sau khi render
        const getData = async () => {
            const dataMovies = await api.getDataPopularMovies(1);
            if(helpers.isEmptyObject(dataMovies)){
                // ko co du lieu
                setError({
                    cod: 404,
                    mess: "Not found data"
                });
            } else {
                // co du lieu
                setPopularMovies(dataMovies['results']);
                setError(null);
            }
            setLoading(false); // hoan thanh
        }
        getData();
    }, []);

    if(loading){
        return (
            <LayoutMovies
                level1="Trang chu"
                level2="Danh sach"
                level3="Phim xem nhieu"
            >
                <Row>
                    <Col span={24}>
                        <Skeleton active />
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }

    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim xem nhieu"
        >
            <Row>
                <Col span={24}>
                    <ListMovies
                        movies={popularMovies}
                    />
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(HomeMovies);