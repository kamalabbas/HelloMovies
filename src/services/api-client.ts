import axios from "axios";
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

    getAll = () => {
        return axiosinstance.get<FetchResponse<T>>(this.endpoint).then((res) => res.data);
    }

    getGenre = () => {
        return axiosinstance.get<T>(this.endpoint).then((res) => res.data);
    }

    get = (id: number | string) => {
        return axiosinstance.get<T>(this.endpoint + '/' +  id).then((res) => res.data);
    }
}

export default APIClient;