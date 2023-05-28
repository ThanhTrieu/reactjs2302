/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const ListMovies = ({ movies }) => {
    return (
        <Row>
            {movies.map((item, index) => (
                <Col span={6} key={index}>
                    <Card
                        hoverable
                        style={{
                            width: 250,
                            marginBottom: '10px'
                        }}
                        cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                    >
                        <Meta title={item.title} />
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
export default React.memo(ListMovies);