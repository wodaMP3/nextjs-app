import { ReviewProps } from './Review.props';
import styles from './Card.module.css';
import cn from 'classnames';
import UserIcon from './user.svg'; 

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
	const { name, title, description, createdAt, rating } = review;

	return (
		<div className={cn(styles.review, className)}
			{...props}
		>
			<UserIcon className={styles.user}/>
			<div>
				<span className={styles.name}>{name}:</span>
				<span>{title}:</span>
			</div>
			<div className={styles.date}>
				
			</div>
		</div>
	);
};