import React from "react";
import {Layout, Menu, MenuProps, Skeleton} from "antd";
import {SelectEventType} from "types/types";
import styles from './nav-bar-menu.module.scss'

const {Sider} = Layout;

type PropsType = {
    items: MenuProps['items']
    onSelect: (key: string) => void
    selectedUserKey: string
}

export const NavBarMenu = ({items, onSelect, selectedUserKey}: PropsType) => {

    const onSelectHandler = (e: SelectEventType) => {
        onSelect(e.key)
    }

    return (
        <div className={styles.navbar}>
            <Sider
                width={225}
                style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0,     boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
                theme={'light'}
            >
                {items?.length ? <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[selectedUserKey ? selectedUserKey : '']}
                    items={items} onSelect={onSelectHandler}
                /> : <Skeleton paragraph={{rows: 10}} active/>
                }
            </Sider>

        </div>
    );
};