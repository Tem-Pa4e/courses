import React from 'react';
import style from './ImageCard.module.scss';

interface IImageCard {
    bgColor: string;
    image: string;
    name: string;
}
export const ImageCard: React.FC<IImageCard> = ({bgColor, image, name}) => {
    return (
        <div style={{backgroundColor: bgColor}} className={style.imageBlock}>
            <img className={style.image} src={image} alt={name}/>
        </div>
    );
};
