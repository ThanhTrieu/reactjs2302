/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Button, Layout, Menu, Input } from 'antd';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const { Header } = Layout;
const { Search } = Input;

const HeaderMovies = () => {
    const { pathname } = useLocation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // nhap tim kiem se chuyen ngay sang trang tim kiem
    const searchMovieByName = (nameMovie) => {
        nameMovie = nameMovie.trim();
        if(nameMovie.length > 0){
            // co nhap tu khoa
            navigate(`/search/${encodeURIComponent(nameMovie)}`);
        }
    }

    let itemsMenus = [
        {label: <NavLink to="/"> Trang chu </NavLink>, key: '/'},
        {label: <NavLink to="/upcoming">Phim sap trinh chieu</NavLink>, key: '/upcoming'},
        {label: <Search 
                    placeholder="input search with enterButton"
                    enterButton 
                    style={{ marginTop: '15px' }}
                    onSearch={keyword => searchMovieByName(keyword)}
                />
        },
        {label: <NavLink to="/favoirte"> Phim yeu thich</NavLink>, key: '/favoirte'},
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