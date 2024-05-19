import {instance} from "app/api/common-api";
import {CommentsType, PostType, UserType} from "types/types";

export const usersApi = {
    getUsers() {
        return instance.get<UserType[]>("users");
    },
    getAllPosts(id: string) {
        return instance.get<PostType[]>(`posts?userId=${id}`);
    },
    getPost(postId: string) {
        return instance.get<PostType>(`posts/${postId}`);
    },
    getComments(postId: string) {
        return instance.get<CommentsType[]>(`posts/${postId}/comments`);
    },
    editPostTitle(postId: string, title: string) {
        return instance.patch<PostType>(`posts/${postId}`, {title});
    }
}