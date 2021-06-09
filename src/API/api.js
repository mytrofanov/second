import * as axios from "axios";


const instance = axios.create ({
    withCredentials: true,
    headers: {"API-KEY": "d0f249f5-23ff-48d0-b8e9-a154edff15d4"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
    getUsers (pageSize=1, currentPage=10 ) {
        return  instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);

}}

// в delete параметр withCredentials отправляется вторым
export const unFollow = (id) => {
    return instance.delete(`follow/${id}`).then(response => response.data);
};

// в post параметр withCredentials отправляется третьим
export const Follow = (id) => {
    return instance.post(`follow/${id}`).then(response => response.data);
};

