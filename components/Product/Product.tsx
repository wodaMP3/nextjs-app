import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Tag } from '../Tag/Tag';
import { Rating } from '../Rating/Rating';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import { useState } from 'react';
import { Button } from '../button/Button';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const Product = ({ product }: ProductProps): JSX.Element => {

	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

	return (
		<>
		<Card className={styles.product}>
			<div className={styles.logo}>
				<img src={product.image} alt={product.title} /></div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{priceRu(product.price)}
				{product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
			</div>
			<div className={styles.credit}>
				{priceRu(product.credit)}
				/
				<span className={styles.month}>month</span>
			</div>
			<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
			<div className={styles.tags}>{product.categories.map(c => 
					<Tag key={c} className={styles.caterogy} color='ghost'>{c}</Tag>)} </div>
			<div className={styles.priceTitle}>Price</div>
			<div className={styles.creditTitle}>credit</div>
			<div className={styles.rateTitle}>{product.reviewCount}&nbsp;
				{declOfNum(	product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
			<Divider className={styles.hr}/>
			<div className={styles.description}>{product.description}</div>
			<div className={styles.feature}>
				{product.characteristics.map(c => (
					<div className={styles.characteristics} key={c.name}>
						<span className={styles.characteristicsName}>{c.name}</span>
						<span className={styles.characteristicsDots}></span>
						<span className={styles.characteristicsValue}>{c.value}</span>
					</div>
				))}
			</div>
			<div className={styles.advBlock}>
			{product.advantages && <div className={styles.advantages}>
					<div className={styles.advTitle}>Advantages</div>
					<div>{product.advantages}</div>	
				</div>}
				{product.disadvantages && <div className={styles.disadvantages}>
					<div className={styles.advTitle}>Disadvantages</div>
					<div>{product.disadvantages}</div> 	
				</div>}
			</div>
			<Divider className={cn(styles.hr, styles.hr2)}/>
			<div className={styles.actions}>
				<Button appearance='primary'>Get more</Button>
				<Button appearance='ghost' 
				arrow={isReviewOpened ? 'down': 'right'} 
				className={styles.reviewButton}
				onClick={() => setIsReviewOpened(!isReviewOpened)}
				>Read reviews</Button>
			</div>
		</Card>
		<Card color='blue' className={cn(styles.reviews, {
				[styles.opened]: isReviewOpened,
				[styles.closed]: !isReviewOpened,
			})}>
				{product.reviews.map(r => (
					<div key={r._id}>
						<Review review={r}/>
						<Divider /> 
					</div>
				))}
				<ReviewForm productId={product._id}/>
		</Card>
		</>
	);	
};