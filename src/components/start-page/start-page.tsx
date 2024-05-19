import React from "react";
import {Flex, Image} from "antd";
import styles from "./start-page.module.scss";

export const StartPage = () => {
    return (
        <Flex wrap gap="large" vertical={false} justify={'center'}>
            <Flex className={styles.imagesContainer}>
                <Image
                    width={700}
                    height={500}
                    src="https://optim.tildacdn.com/tild6436-3636-4165-a461-613661323536/-/format/webp/Group_12085726.png"
                    preview={false}
                    alt={'self-development'}
                    style={{borderRadius: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}
                />
                <Image
                    width={250}
                    src="https://static.tildacdn.com/tild6335-3565-4263-b731-356337343463/Group_12085199.svg"
                    preview={false}
                    alt={'message'}
                    className={styles.message}
                />
            </Flex>
        </Flex>
    );
};