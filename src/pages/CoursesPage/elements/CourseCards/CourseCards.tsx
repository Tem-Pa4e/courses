import React from 'react';
import {IData} from "../../App";
import './Cards.scss';
import {DescriptionCard, ImageCard} from "../../ui-kit";
interface ICoursesCards {
    card: IData
}
export const CoursesCards: React.FC<ICoursesCards> = ({card}) => {
    return (
        <div className='card'>
            <ImageCard image={card.image} name={card.name} bgColor={card.bgColor} />
            <DescriptionCard name={card.name} />
        </div>
    );
};
