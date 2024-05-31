import axios, { AxiosResponse } from 'axios';
export interface IData {
    bgColor: string;
    id: string;
    image: string;
    name: string;
    tags: string[];
}

export const fetchCourses = async (): Promise<AxiosResponse<IData[]>> => {
    return await axios.get<IData[]>('https://logiclike.com/docs/courses.json');
};