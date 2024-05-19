import {instance} from "app/api/common-api";
import {UserType} from "types/types";

export const usersApi = {
    getUsers() {
        return instance.get<UserType[]>("users");
    }
}