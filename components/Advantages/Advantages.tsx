import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import React from 'react';
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.advantage}>
					<CheckIcon />
					<div>{a.title}</div>
				</div>
			))}
		</>
	);
};