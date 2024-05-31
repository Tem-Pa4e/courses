import React from 'react';
import './DescriptionCard.scss'

interface IDescriptionCard {
    name: string;
}
export const DescriptionCard: React.FC<IDescriptionCard> = ({name}) => {
    return (
        <div style={{padding: '12px 18px 18px 18px'}}>{name}</div>
    );
};
