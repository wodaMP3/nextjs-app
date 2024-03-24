import styles from './button.module.css';
import { ButtonProps } from './button-props';
import cn from 'classnames';

export const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost'
            })}
        >
            {children}
        </button>
    )
};