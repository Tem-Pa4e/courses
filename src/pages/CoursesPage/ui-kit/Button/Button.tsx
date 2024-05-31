import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import style from './Button.module.scss';

interface IButtonProps {
    children: ReactNode;
    onClick: () => void;
    isActive: boolean;
}

export const Button: FC<IButtonProps> = ({children, onClick, isActive}) => {
    return (
        <button onClick={onClick} className={classNames(style.btn, {
            [style['btn-active']] : isActive,
        })}>
            {children}
        </button>
    )
};