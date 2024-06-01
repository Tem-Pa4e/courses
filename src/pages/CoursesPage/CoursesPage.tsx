import React, {useState} from 'react';
import {CourseCards, CourseList} from "./elements";
import style from   './CoursesPage.module.scss';
import {IData} from "../../api/api";
import {filterCourses} from "../../common/utils/filterCourses";

interface ICoursesPage {
    tags: string[];
    courses: IData[];
}
export const CoursesPage: React.FC<ICoursesPage> = ({tags, courses}) => {
    const [activeTheme, setActiveTheme] = useState(0);
    const handleThemeClick = (index: number) => {
        setActiveTheme(index);
    };

    const filteredCourses = filterCourses(courses, activeTheme, tags);

    return (
        <div className={style.course_block}>
            <CourseList tags={tags} handleThemeClick={handleThemeClick} activeTheme={activeTheme}/>
            <div className={style.content}>
                {filteredCourses.map(el => <CourseCards key={el.id} card={el}/>)}
            </div>
        </div>
    );
};
