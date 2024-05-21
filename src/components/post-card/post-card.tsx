import React, {CSSProperties, Dispatch, SetStateAction} from "react";
import {Card, Typography} from "antd";
import {capitalizeFirstLetter} from "utils/capitalizeFirstLetter";
import {useNavigate} from "react-router-dom";
import styles from 'components/post-card/post-card.module.scss'

type PropsType = {
    title: string
    body: string
    postId: number
    userId: number
    setSelectedPostKey: Dispatch<SetStateAction<string>>
}

const contentStyle: CSSProperties = {
    maxWidth: '260px',
    margin: 0,
    background: 'linear-gradient(95deg, rgb(250, 202, 23) 20%, rgb(255, 156, 72) 80%)',
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.88)',
    fontSize: 14,
    lineHeight: '1.55',
    fontWeight: 400,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
}

const titleStyle: CSSProperties = {
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1.35,
};

const {Title} = Typography;

export const PostCard = ({title, body, postId, userId, setSelectedPostKey}: PropsType) => {
    const navigate = useNavigate()

    const onClickHandler = () => {
        setSelectedPostKey(postId.toString())
        localStorage.setItem('postId', postId.toString())
        navigate(`/message/${userId}`)
    }

    const titleComponent = <Title level={3} style={titleStyle}>{capitalizeFirstLetter(title)}</Title>

    return (
        <Card style={contentStyle} className={styles.card} onClick={onClickHandler} title={titleComponent}>
            <p className={styles.cardPostContent}>
                {capitalizeFirstLetter(body)}
            </p>
        </Card>
    );
};