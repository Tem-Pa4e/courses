import React from 'react';
import style from './CourseCards.module.scss';
import {DescriptionCard, ImageCard} from "../../ui-kit";
import { IData } from '../../../../api/api';
interface ICoursesCards {
    card: IData;
}
export const CourseCards: React.FC<ICoursesCards> = React.memo(({card}) => {
    return (
        <div className={style.card_block}>
            <ImageCard image={card.image} name={card.name} bgColor={card.bgColor} />
            <DescriptionCard name={card.name} />
        </div>
    );
});
