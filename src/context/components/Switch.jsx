/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { Switch } from 'antd';
import ChangeUIContext from "../share/context";


const SwitchComponent = () => {
    const { onChange } = useContext(ChangeUIContext)
    return (
        <Switch defaultChecked onChange={onChange} />
    )
}
export default React.memo(SwitchComponent);