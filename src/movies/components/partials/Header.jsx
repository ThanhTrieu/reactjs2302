/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Button, Layout, Menu } from 'antd';
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const { Header } = Layout;

const HeaderMovies = () => {
    const { pathname } = useLocation();
    const { user, logout } = useAuth();

    let itemsMenus = [
        {label: <NavLink to="/"> Trang chu </NavLink>, key: '/'},
        {label: <NavLink to="/upcoming">Phim sap trinh chieu</NavLink>, key: '/upcoming'},
        {label: <NavLink to="/search">Tim kiem</NavLink>, key: '/search'},
        {label: <NavLink to="/favoirte"> Phim yeu thich</NavLink>, key: '/favoirte'}
    ];

    if(user){
        itemsMenus = [
            ...itemsMenus,
            {
                label: `Hi : ${user.firstName} ${user.lastName}`
            },
            {
                label: <Button onClick={() => logout()}> Dang xuat</Button>
            },
        ]
    } else {
        itemsMenus = [
            ...itemsMenus,
            {label: <NavLink to="/login"> Dang nhap</NavLink>, key: '/login'}
        ]
    }

    return (
        <Header
            style={{
            display: 'flex',
            alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={itemsMenus}
            />
        </Header>
    )
}
export default React.memo(HeaderMovies);