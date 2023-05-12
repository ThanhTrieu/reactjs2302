import { Row, Col, Table } from "antd";
import { NumericFormat } from 'react-number-format';

const columns = [
    {
        title: 'Country',
        dataIndex: 'Country',
        key: 'CountryCode'
    },
    {
        title: 'CountryCode',
        dataIndex: 'CountryCode',
        key: 'CountryCode'
    },
    {
        title: 'New Confirmed',
        dataIndex: 'NewConfirmed',
        key: 'CountryCode'
    },
    {
        title: 'Total Confirmed',
        dataIndex:'TotalConfirmed',
        key: 'CountryCode',
        render: (text) => <NumericFormat
                            value={text}
                            allowLeadingZeros thousandSeparator=","
                            displayType="text"
                           /> 
    },
    {
        title: 'New Deaths',
        dataIndex:'NewDeaths',
        key: 'CountryCode'
    },
    {
        title: 'Total Deaths',
        dataIndex:'TotalDeaths',
        key: 'CountryCode'
    },
    {
        title: 'New Recovered',
        dataIndex:'NewRecovered',
        key: 'CountryCode'
    },
    {
        title: 'Total Recovered',
        dataIndex:'TotalRecovered',
        key: 'CountryCode'
    }
];

const Countries = ({ countries }) => {
    return (
        <Row style={{ marginBottom: '30px' }}>
            <Col span={24}>
                <Table
                    columns={columns}
                    dataSource={countries}
                    rowKey='ID'
                />
            </Col>
        </Row>
    )
}
export default Countries;