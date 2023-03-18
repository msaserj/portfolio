import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import css from './Button.module.scss';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type PropsType = ButtonPropsType & {
  children: ReactNode;
  round?: boolean;
};

export const Button: React.FC<PropsType> = ({ children, className, round, ...restProps }) => {
  const cssClass = round && css.round;
  return (
    <button className={`${css.button} ${cssClass}`} {...restProps}>
      {children}
    </button>
  );
};
