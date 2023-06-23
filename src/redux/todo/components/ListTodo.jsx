/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useSelector } from "react-redux";

const ListTodo = () => {
    const data = useSelector(state => state.todo.listData);
    console.log(data);
    
    return (
        <ul>
            <li>
                AAAAAA
            </li>
            <li>
                BBBBBB
            </li>
        </ul>
    )
}
export default React.memo(ListTodo);