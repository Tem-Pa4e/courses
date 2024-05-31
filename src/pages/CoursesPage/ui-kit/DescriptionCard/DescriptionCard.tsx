import React from 'react';
import style from './DescriptionCard.module.scss';

interface IDescriptionCard {
    name: string;
}
export const DescriptionCard: React.FC<IDescriptionCard> = ({name}) => {
    return (
        <div className={style.description}>{name}</div>
    );
};
