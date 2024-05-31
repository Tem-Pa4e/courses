import React from 'react';
import style from './CoursesList.module.scss';
import {Button} from "../../ui-kit";

interface ICoursesList {
    tags: string[];
    handleThemeClick: (index: number) => void;
    activeTheme: number
}

export const CourseList: React.FC<ICoursesList> = React.memo(({tags, handleThemeClick, activeTheme}) => {
    console.log('list')
    return (
        <nav className={style.navigation}>
            <ul>
                {tags.map((tag, index) => <li key={index}>
                    <Button
                        onClick={() => handleThemeClick(index)}
                        isActive={index === activeTheme}>
                        <span className={style.text}>
                            {tag}
                        </span>
                    </Button>
                </li>)}
            </ul>
        </nav>
    );
});
