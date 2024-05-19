import React, {CSSProperties} from "react";
import { Image, Layout, theme} from "antd";
import {Link} from "react-router-dom";
import styles from './header.module.scss'

const {Header} = Layout;

export const HeaderComponent = () => {
    const {token: {colorBgContainer}} = theme.useToken();

    const headerStyle: CSSProperties = {
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 0,
        background: colorBgContainer,
        height: '60px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }

    return (
        <Header style={headerStyle}>
            <Link to={'https://online.artforintrovert.ru/'} target={'_blank'} className={styles.link}>
                <Image
                src={'https://static.tildacdn.com/tild3733-3439-4138-b035-643537353037/Frame_19.svg'}
                width={150}
                height={40}
                preview={false}
                className={styles.linkHeaderLogo}
                alt={'art for introvert logo'}
                />
            </Link>
        </Header>
    );
};