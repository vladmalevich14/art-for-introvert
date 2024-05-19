import React from "react";
import {Layout, theme} from "antd";
import styles from './header.module.scss'

const {Header} = Layout;

export const HeaderComponent = () => {
    const {token: {colorBgContainer}} = theme.useToken();

    const headerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 0,
        background: colorBgContainer,
        height: '60px'
    }

    return (
        <Header style={headerStyle}>
            <a href="https://online.artforintrovert.ru/" target={'_blank'} rel="noreferrer" className={styles.link}>
                <img
                src={'https://static.tildacdn.com/tild3733-3439-4138-b035-643537353037/Frame_19.svg'}
                className={styles.headerLogo}
                alt={'art for introvert logo'}
                />
            </a>
        </Header>
    );
};