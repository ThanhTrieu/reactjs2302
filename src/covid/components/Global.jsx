import { Row, Col, Card } from 'antd';
import { NumericFormat } from 'react-number-format';

const Global = ({ global }) => {

    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={8}>
                <Card
                    title="Confirmed"
                >
                    <p>New Confirmed:
                        <NumericFormat
                            value={global.NewConfirmed}
                            allowLeadingZeros thousandSeparator=","
                            displayType="text"
                        />
                    </p>
                    <p>Total Confirmed: 
                        {global.TotalConfirmed}</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    title="Deaths"
                >
                    <p>New Deaths: 12232</p>
                    <p>Total Deaths: 2425</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    title="Recovered"
                >
                    <p>New Recovered: 12232</p>
                    <p>Total Recovered: 2425</p>
                </Card>
            </Col>
        </Row>
    )
}
export default Global