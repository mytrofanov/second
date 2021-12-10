import axios from "axios";
import {PhotosType, ProfileType, UsersType} from "../types/Types";


const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "c637e3f0-9a3b-4f86-b8d5-b0bd7b1220cf"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})
//Типизация usersAPI начало
type UsersAPIType = {
    items: Array<UsersType>
    totalCount: number
    error: string
}
//Типизация usersAPI конец

//Начало типизации для follow/unFollow
type FollowUnFollowApiType = {
    resultCode: ResultCodeType
    messages: string
    data: {}
}
// Конец типизации для follow/unFollow


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<UsersAPIType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    getFriends(currentFriendsPage = 1, friendsPageSize = 10, followed = true) {
        return instance.get<UsersAPIType>(`users?page=${currentFriendsPage}&count=${friendsPageSize}&friend=${followed}`)
    },

// в delete параметр withCredentials отправляется вторым
    unFollow(id: number) {
        return instance.delete<FollowUnFollowApiType>(`follow/${id}`)
    },

// в post параметр withCredentials отправляется третьим
    follow(id: number) {
        return instance.post<FollowUnFollowApiType>(`follow/${id}`)
    },

    getProfile(userId: number | null) {
        console.warn('Obsolete method.Please use profileApi')
        return profileAPI.getProfile(userId);
    }

}

//Начало типизации для всех типов ответов

type ApiResponseType = {
    resultCode: ResultCodeType
    messages: Array<string>
    data: {
        photos: PhotosType
    }

}
//Конец типизации

export const profileAPI = {
    getProfile(userId: number | null ) {
        return instance.get<ProfileType>(`profile/` + userId)
    },

    getStatus(userId: number | null) {
        return instance.get<string>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<ApiResponseType>('profile/status', {status: status})
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ApiResponseType>(`profile`, profile)
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log("data:", error.response.data);
                    console.log("status:", error.response.status);
                    console.log("headers:", error.response.headers);
                    return error.response
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log("request:", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error-message:", error.message);
                }

            });

    },
    savePhoto(file: File) {
        const formData = new FormData();
        formData.append("image", file);

        return instance.put<ApiResponseType>('profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
                //файл отправляем тремя параметрами
            }
        });
    }
}
//Начало кодов сервера
export enum ResultCodeType {
    success,
    error = 1
}

export enum ResultCodeTypeWithCaptcha {
    captchaRequired = 10
}
//Конец кодов сервера

// Начало типизации authAPI
export type ResponseDataType = {
    id: number
    email: string
    login: string
}

type AuthApiMeType = {
    data: ResponseDataType
    resultCode: ResultCodeType
    messages: Array<string>
}

type AuthApiLoginType = {
    resultCode: ResultCodeType | ResultCodeTypeWithCaptcha
    messages: Array<string>
    data: { userId: number | null }
}
type AuthApiDeleteType = {
    resultCode: ResultCodeType
    messages: Array<string>
    data: {}
}
// Конец типизации authAPI

export const authAPI = {
    me() {
        return instance.get<AuthApiMeType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string) {
        return instance.post<AuthApiLoginType>('auth/login',
            {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout() {
        return instance.delete<AuthApiDeleteType>('auth/login').then(res=>res.data)
    }
}

type SecurityAPIType = {
    url:string
}
export const securityAPI = {
    getCaptureUrl() {
        return instance.get<SecurityAPIType>(`security/get-captcha-url`);
    }
}