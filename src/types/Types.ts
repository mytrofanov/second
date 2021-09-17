export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos?: PhotosType
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType | null
    followed: boolean
    uniqueUrlName: null |string
}
export type UsersMapStateToPropsType = {
    currentPage: number
    pageSize: number
    users: Array<UsersType>
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UsersMapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersOwnPropsType = {
    pageTitle: string
}

export type FriendsType = {
    id: number
    name: string
    status: string
    photos: PhotosType | null
    followed: boolean
    uniqueUrlName: null | string
}