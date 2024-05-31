import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import './Button.scss';

interface IButtonProps {
    children: ReactNode;
    onClick?: () => void;
    isActive: boolean;
}

export const Button: FC<IButtonProps> = ({children, onClick, isActive}) => {
    return (
        <button onClick={onClick} className={classNames('btn', {
            'btn-active': isActive,
        })}>
            {children}
        </button>
    )
}