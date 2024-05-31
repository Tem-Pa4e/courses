import {IData} from "../../api/api";

export const getAllUniqueTags = (data: IData[]) => {
    return ["Все темы", ...new Set(data.flatMap((item) => item.tags))];
};