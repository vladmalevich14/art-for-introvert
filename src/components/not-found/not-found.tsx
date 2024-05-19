import {Button, ConfigProvider, Typography} from "antd";
import {TinyColor} from '@ctrl/tinycolor'
import styles from './not-found.module.scss'
import {useNavigate} from "react-router-dom";

const {Title, Paragraph} = Typography

export const NotFound = () => {
    const navigate = useNavigate()
    const colors = ['rgb(250, 202, 23)', 'rgb(255, 156, 72)'];
    const getHoverColors = (colors: string[]) =>
        colors.map((color) => new TinyColor(color).lighten(5).toString());
    const getActiveColors = (colors: string[]) =>
        colors.map((color) => new TinyColor(color).darken(5).toString());

    const onCLickHandler = () => {
        navigate('/')
    }

    return (
        <div className={styles.notFound}>
            <Title level={1}>Ошибка 404</Title>
            <Paragraph>Такой страницы не существует,
                либо она была удалена</Paragraph>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: `linear-gradient(135deg, ${colors.join(', ')})`,
                            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors).join(', ')})`,
                            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors).join(', ')})`,
                            lineWidth: 0,
                        },
                    },
                }}
            >
                <Button type="primary" size="large" onClick={onCLickHandler}>Вернуться на главную</Button>
            </ConfigProvider>
        </div>
    );
};