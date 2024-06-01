import {IData} from "../../api/api";

export const filterCourses = (courses: IData[], activeTheme: number, tags: string[]): IData[] => {
    if (tags[activeTheme] && activeTheme !== 0) {
        return courses.filter(el => el.tags.includes(tags[activeTheme]));
    }
    return courses;
};