import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import CloseIcon from './close.svg';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../button/Button';
import { useForm } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit } = useForm<IReviewForm>();


	return (
		<>
			<div className={cn(styles.reviewForm, className)}
				{...props}
			>
				<Input placeholder='Name'/>
				<Input placeholder='Title of review' className={styles.title}/>
				<div className={styles.rating}>
					<span>Rating:</span>
					<Rating rating={0} />
				</div>
				<Textarea placeholder='Text of review' className={styles.description}/>
				<div className={styles.submit}>
					<Button appearance='primary'>Send</Button>
					<span className={styles.info}>Before publishing your review will be checked</span>
				</div>
				<div className={styles.success}>
					<div className={styles.successTitle}>Your review was sent!</div>
					<div>
						Thanks! Your review will be published after the inspection		
					</div>
					<CloseIcon className={styles.close}/>
				</div>
			</div>
		</>
	);
};