import React from "react";
import {Flex, Image} from "antd";
import styles from "./start-page.module.scss";
import {useResize} from "hooks/useResize";

export const StartPage = () => {
    const screenWidth = useResize()

    return (
        <Flex wrap gap="large" vertical={false} justify={'center'}>
            <Flex className={styles.imagesContainer}>
                <Image
                    width={screenWidth > 1000 ? 700 : '100%'}
                    height={screenWidth > 1000 ? 500: screenWidth > 500 ? 250 : 200}
                    src="https://optim.tildacdn.com/tild6436-3636-4165-a461-613661323536/-/format/webp/Group_12085726.png"
                    preview={false}
                    alt={'self-development'}
                    style={{borderRadius: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}
                />
                <Image
                    width={screenWidth > 1000 ? 200 : screenWidth > 600 ? 100 : screenWidth > 400 ? 90 : 70}
                    src="https://static.tildacdn.com/tild6335-3565-4263-b731-356337343463/Group_12085199.svg"
                    preview={false}
                    alt={'message'}
                    className={styles.message}
                />
            </Flex>
        </Flex>
    );
};