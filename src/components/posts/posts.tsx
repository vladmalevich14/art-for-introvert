import {Flex, Skeleton} from "antd";
import {PostCard} from "componenst/post-card/post-card";
import React, {Dispatch, SetStateAction, useEffect} from "react";
import {postsThunks} from "app/posts-reducer";
import {useAppDispatch} from "hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {RootStateType} from "app/store";

type PropsType = {
    selectedUserKey: string
    setSelectedPostKey: Dispatch<SetStateAction<string>>
    selectedPostKey: string
}

export const Posts = ({selectedUserKey, setSelectedPostKey, selectedPostKey}: PropsType) => {
    const dispatch = useAppDispatch();
    const posts = useSelector((state: RootStateType) => state.posts)

    useEffect(() => {
        dispatch(postsThunks.fetchAllPosts(selectedUserKey.toString()))
    }, []);

    if (selectedUserKey !== '0' && !posts.length) {
        return <Skeleton paragraph={{rows: 10}} active/>
    }

    return (
        <Flex wrap gap="large" vertical={false} justify={'center'}>
            {posts.length && posts.map(post => {
                    return <PostCard key={post.id} postId={post.id} userId={post.userId} title={post.title} body={post.body}
                                     setSelectedPostKey={setSelectedPostKey}
                    />

                })}
        </Flex>
    );
};