import {ReactInstance, MouseEvent, KeyboardEvent} from "react";

export type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: UserAddressType
    phone: string
    website: string
    company: UserCompanyType
}

type UserAddressType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: UserAddressGeoType
}

type UserAddressGeoType = {
    lat: string
    lng: string
}

type UserCompanyType = {
    name: string
    catchPhrase: string
    bs: string
}

export type PostType = {
    userId: number
    id: number
    title: string
    body: string
}

export type CommentsType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export type SelectEventType = {
    item: ReactInstance
    key: string
    keyPath: string[]
    selectedKeys: string[]
    domEvent: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
}