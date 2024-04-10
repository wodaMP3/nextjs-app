import { HhDataProps } from './hhData.props';
import styles from './hhData.module.css';
import cn from 'classnames';
import { Card } from '..';
import React from 'react';
import RateIcon from './rate.svg'

export const HhData = ({ count }: HhDataProps): JSX.Element => {
	return (
			<div className={styles.hh}>
				<Card className={styles.count}>
					<div className={styles.title}>Всего вакансий</div>
					<div className={styles.countValue}>{count}</div>
				</Card>
				<Card className={styles.salary}>
					<div className={styles.title}>Всего</div>
					<div className={styles.salaryValue}>{count}</div>
					<div className={styles.rate}></div>
						<RateIcon className={styles.filled}/>
						<RateIcon />
						<RateIcon />
				</Card>
			</div>		
	);
};