/* eslint-disable react-refresh/only-export-components */
import React from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col } from "antd";

// eslint-disable-next-line react-refresh/only-export-components
const UpcomingMovies = () => {
    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim sap ra rap"
        >
            <Row>
                <Col span={24}>
                    <h4> Phim sap trinh chieu</h4>
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(UpcomingMovies);