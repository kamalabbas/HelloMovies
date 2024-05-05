import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../entities/FetchResponse";

const axiosinstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTI4YzM4NzdiYWFhNDRiNjBmNDEzMjZkNzgxNTQxOSIsInN1YiI6IjVmNDU2YWM3ODEzY2I2MDAzNGEzOTNkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLyH-4RUns2KmHWPlhVtdkvOrTvg_5hBj76NeV9OczY",
        accept:' application/json'
    },
});
class APIClient<T> {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (requestConfig?: AxiosRequestConfig) => {
        return axiosinstance.get<FetchResponse<T>>(this.endpoint, requestConfig).then((res) => res.data);
    }

    getGenre = () => {
        return axiosinstance.get<T>(this.endpoint).then((res) => res.data);
    }

    get = (id: number | string) => {
        return axiosinstance.get<T>(this.endpoint + '/' +  id).then((res) => res.data);
    }
}

export default APIClient;

export function get<T>(endpoint: string, requestConfig?: AxiosRequestConfig) {
    return axiosinstance.get<T>(endpoint, requestConfig).then((res) => res.data);
}

export function getresults<T>(endpoint: string, requestConfig?: AxiosRequestConfig) {
    return axiosinstance.get<FetchResponse<T>>(endpoint, requestConfig).then((res) => res.data);
}

export function getItem<T>(endpoint: string, id: number, requestConfig?: AxiosRequestConfig) {
    return axiosinstance.get<T>(`${endpoint}/${id}`, requestConfig).then((res) => res.data);
}


