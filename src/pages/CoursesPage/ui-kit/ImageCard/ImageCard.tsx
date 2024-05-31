import React from 'react';
import './ImageCard.scss'

interface IImageCard {
    bgColor: string;
    image: string;
    name: string;
}
export const ImageCard: React.FC<IImageCard> = ({bgColor, image, name}) => {
    return (
        <div style={{backgroundColor: bgColor}} className='imageBlock'>
            <img className='image' src={image} alt={name}/>
        </div>
    );
};
