/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { Row, Col } from "antd";
import ChangeUIContext from "../share/context";


const LayoutComponent = ({ children }) => {
    //const color = { light: 'white' }
    const { bgColor } = useContext(ChangeUIContext);
    //console.log(dataContext);
    return (
        <Row className={bgColor}>
            <Col span={20} offset={2}>
                {children}
            </Col>
        </Row>
    )
}
export default React.memo(LayoutComponent);