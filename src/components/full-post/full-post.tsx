import React, {CSSProperties, useEffect} from "react";
import {Button, Card, List, Skeleton, Typography} from "antd";
import {Comment} from '@ant-design/compatible';
import {capitalizeFirstLetter} from "utils/capitalizeFirstLetter";
import {useAppDispatch} from "hooks/useAppDispatch";
import {editPostTitle, getComments, getPost} from "app/reducers/selected-post-reducer";
import {useSelector} from "react-redux";
import {RootStateType} from "app/store";
import {useNavigate} from "react-router-dom";
import {LeftOutlined} from "@ant-design/icons";
import styles from './full-post.module.scss'

type PropsType = {
    selectedPostKey: string
}

const contentStyle: CSSProperties = {
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
    lineHeight: 1.35
};

const {Title, Paragraph} = Typography;

export const FullPost = ({selectedPostKey}: PropsType) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const post = useSelector((state: RootStateType) => state.selectedPost)

    const onChangeHandler = (value: string) => {
        dispatch(editPostTitle(selectedPostKey, value))
    }

    useEffect(() => {
        dispatch(getPost(selectedPostKey))
        dispatch(getComments(selectedPostKey))
    }, [selectedPostKey]);

    if (!post.postContent || !post.comments) {
        return <Skeleton paragraph={{rows: 10}} active/>
    }

    return (
        <div>
            <Button onClick={() => navigate(-1)} className={styles.backArrow}>
                <LeftOutlined/>
            </Button>

            <Card title={
                <Paragraph
                    style={titleStyle}
                    className={styles.title}
                    editable={{onChange: onChangeHandler}}
                >
                    {capitalizeFirstLetter(post.postContent.title)}
                </Paragraph>}
                  style={contentStyle}
                  className={styles.card}>
                <Paragraph>{capitalizeFirstLetter(post.postContent.body)}</Paragraph>
            </Card>

            <Title level={3}>Comments</Title>
            <List
                className={styles.list}
                header={`${post.comments.length} replies`}
                itemLayout="horizontal"
                dataSource={post.comments}
                renderItem={item => (
                    <li style={{boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
                        <Comment
                            author={item.name}
                            avatar={'https://static.tildacdn.com/tild3034-3530-4533-a538-303733316465/Group_120676.svg'}
                            content={capitalizeFirstLetter(item.body)}
                            className={styles.listItem}
                        />
                    </li>
                )}
            />
        </div>
    );
};