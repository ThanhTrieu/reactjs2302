import { Row, Col, List, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const ListTodo = (props) => {
    return (
        <Row>
            <Col span={24}>   
                <List
                    itemLayout="horizontal"
                    dataSource={props.data}
                    renderItem={(item, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            avatar={<Checkbox
                                        onChange={() => props.finish(item.id)}
                                        checked={item.done}
                                    />}
                            title={ <span
                                        style={item.done ? {color:'red', textDecoration: 'line-through'} : null}
                                    > {item.name} </span>}
                        />
                        <div>
                            <DeleteOutlined
                                onClick={() => props.remove(item.id)}
                            />
                        </div>
                    </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}
export default ListTodo