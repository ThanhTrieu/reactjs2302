import { useState } from 'react'
import { Row, Col } from 'antd'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'

export default function TodoApp(){
    const [nameTodo, setNameTodo] = useState(null);
    const [listData, setListData] = useState([]);
    const [idTodo,setIdTodo] = useState(1);

    //Luu ten cong viec vao trong state
    const changeNameTodo = (event) => {
        let value = event.target.value.trim();
        if(value.length > 0 ){
            setNameTodo(value);
        }
    }
    // them moi cong viec
    const addTodo = (works = '') => {
        if(works.length > 0){
            setIdTodo(idTodo+1);
            setListData([...listData, {
                id: idTodo,
                name: works,
                done: false
            }]);
            setNameTodo(null);
        }
    }
    // xoa cong viec
    const removeItemTodo = (id) => {
        console.log(id);
        // id  =2
        /*
            [
                {id: 1, name: 'a'},
                {id: 2, name: 'b'},
                {id: 3, name: 'c'},
            ]
        */

    }

    return (
        <Row>
            <Col span={12} offset={6}>
                <AddTodo
                    change={changeNameTodo}
                    add={addTodo}
                    value={nameTodo}
                />
                <ListTodo
                    data={listData}
                    remove={removeItemTodo}
                />
            </Col>
        </Row>
    )
}