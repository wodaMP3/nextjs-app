import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../button/Button';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	return (
		<div className={cn(styles.reviewForm, className)}
			{...props}
		>
			<Input />
			<Input />
			<div className={styles.rating}>
				<span>Оценка:</span>
				<Rating rating={0} />
			</div>
			<Textarea />
			<div className={styles.submit}>
				<Button appearance='primary'>Send</Button>
				<span>Before publishing text will be sent to moderating check</span>
			</div>
		</div>
	);
};