import React from 'react';
import './CoursesList.scss'
import {Button} from "../../ui-kit";

interface ICoursesList {
    tags: string[];
    handleThemeClick: (index: number) => void;
    activeTheme: number
}

export const CoursesList: React.FC<ICoursesList> = ({tags, handleThemeClick, activeTheme}) => {
    return (
        <nav className='navigation'>
            <ul>
                {tags.map((tag, index) => <li key={index}>
                    <Button
                        onClick={() => handleThemeClick(index)}
                        isActive={index === activeTheme}>
                        {tag}
                    </Button></li>)}
            </ul>
        </nav>
    );
};
