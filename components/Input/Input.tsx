import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(({  className, error, ...props }: InputProps, 
		ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<div>
			<input className={cn(className, styles.input)} ref={ref} {...props}/>
			{error && error.message}
		</div>
	);
});