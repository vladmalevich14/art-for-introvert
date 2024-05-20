import React, {useEffect, useState} from 'react';
import {CopyrightOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Spin} from 'antd';
import {useSelector} from "react-redux";
import {RootStateType} from "app/store";
import {usersThunks} from "app/users-reducer";
import {useAppDispatch} from "hooks/useAppDispatch";
import {postsThunks} from "app/posts-reducer";
import {HeaderComponent} from "components/header/header";
import {NavBarMenu} from "components/nav-bar-menu/nav-bar-menu";
import {Navigate, Route, Routes, useLocation, useNavigate,} from "react-router-dom";
import {Posts} from "components/posts/posts";
import {FullPost} from "components/full-post/full-post";
import {StartPage} from "components/start-page/start-page";
import {NotFound} from "components/not-found/not-found";
import {useResize} from "hooks/useResize";

const {Content, Footer} = Layout;

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const screenWidth = useResize()
    const users = useSelector((state: RootStateType) => state.users)
    const pathName = location.pathname
    const slashIndex = pathName.lastIndexOf('/')
    const userCondition = pathName.includes('posts') ? pathName.slice(slashIndex + 1) : pathName.includes('message') ? pathName.split('/')[2] : '0'
    const postCondition = pathName.includes('message') ? localStorage.getItem('postId') : ''
    const [selectedUserKey, setSelectedUserKey] = useState<string>(userCondition ? userCondition : '0');
    const [selectedPostKey, setSelectedPostKey] = useState<string>(postCondition ? postCondition : '')

    const items: MenuProps['items'] = users.map((user) => ({
        key: user.id,
        icon: React.createElement(UserOutlined),
        label: user.name,
    }));

    useEffect(() => {
        dispatch(usersThunks.fetchUsers())
    }, []);


    const onSelect = (key: string) => {
        const userId = users[+key - 1].id
        setSelectedUserKey(key)
        dispatch(postsThunks.fetchAllPosts(key))
        navigate(`/posts/${userId}`)
    }

    if (!users.length) {
        return <Spin spinning fullscreen/>
    }

    return (
        <Layout hasSider style={{minHeight: '100vh'}}>
            <NavBarMenu items={items} onSelect={onSelect} selectedUserKey={selectedUserKey}/>
            <Layout style={{marginLeft: screenWidth > 575 ? 225 : 80}}>
                <HeaderComponent />
                <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                    <Routes>
                        <Route element={<Navigate to='/art-for-introvert'/>} path={'/'}/>
                        <Route path={"/art-for-introvert"} element={<StartPage/>}/>
                        <Route path={'/posts/:userId'}
                               element={<Posts selectedUserKey={selectedUserKey}
                                               setSelectedPostKey={setSelectedPostKey}/>}
                        />
                        <Route path={'/message'} element={<FullPost selectedPostKey={selectedPostKey}/>}>
                            <Route path={':userId'} element={<FullPost selectedPostKey={selectedPostKey}/>}/>
                        </Route>
                        <Route element={<NotFound/>} path={'*'}/>
                    </Routes>
                </Content>
                <Footer style={{textAlign: 'center'}}>ООО "АРТИНТРОВЕРТ" <CopyrightOutlined /> {new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>
    );
};

export default App;