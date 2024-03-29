export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos?: PhotosType
    aboutMe?: string
    error?: string
}
export type ProfilePropsType = {
    profile: ProfileType | null
    status: string | null
    updateStatus: (status:string | null)=>void
    isOwner: boolean
    savePhoto: (file: File)=>void
    saveProfileForm: (profile:ProfileType)=> Promise<any>
    setEditMode: (editMode:boolean)=>void
    editMode: boolean
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
    small: string | null | undefined
    large: string | null | undefined
}

export type UsersType = {
    id: number | null
    name: string
    status: string | null
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
    follow: (userId: number | null) => void
    unfollow: (userId: number | null) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersOwnPropsType = {
    pageTitle: string
}

export type FriendsType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType | null
    followed: boolean
    uniqueUrlName: null | string
}

export type PostsType = {
    id: number
    message: string
    count: number
    discount: number
}