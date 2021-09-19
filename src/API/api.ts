import axios from "axios";
import {ProfileType} from "../types/Types";


const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "7d870823-54dd-449f-8b28-49f59a10c313"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    getFriends(currentFriendsPage = 1, friendsPageSize = 10, followed = true) {
        return instance.get(`users?page=${currentFriendsPage}&count=${friendsPageSize}&friend=${followed}`)
    },

// в delete параметр withCredentials отправляется вторым
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
    },

// в post параметр withCredentials отправляется третьим
    follow(id:number) {
        return instance.post(`follow/${id}`)
    },

    getProfile(userId: number) {
        console.warn('Obsolete method.Please use profileApi')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status})
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile )
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log("data:" , error.response.data);
                    console.log("status:" , error.response.status);
                    console.log("headers:" , error.response.headers);
                    return error.response
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log("request:" , error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error-message:", error.message);
                }

            });

    },
    savePhoto(file: File) {
        const formData = new FormData();
        formData.append("image", file);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
                //файл отправляем тремя параметрами
            }
        });
    }
}
export enum ResponseCodeMe  {
    success,
    error = 1
}
export enum ResponseCodeWithCaptcha {
    captchaRequired=10
}

type ResponseDataType = {
    id: number
    email: string
    login: string
}

type AuthApiMeType = {
    data: ResponseDataType
    resultCode:ResponseCodeMe
    messages: Array<string>
}

type AuthApiLoginType = {
    resultCode: ResponseCodeMe | ResponseCodeWithCaptcha
    messages: Array<string>
    data: {userId:number}
}
type AuthApiDeleteType = {
    resultCode: ResponseCodeMe
    messages: Array<string>
    data: {}
}

export const authAPI = {
    me() {
        return instance.get<AuthApiMeType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false, captcha:string) {
        return instance.post<AuthApiLoginType>('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<AuthApiDeleteType>('auth/login')
    }
}

export const securityAPI = {
    getCaptureUrl(){
        return instance.get(`security/get-captcha-url`);
    }
}