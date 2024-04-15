import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Tag } from '../Tag/Tag';
import { Rating } from '../Rating/Rating';
import { Button } from '../button/button';
import { declOfNum, devlOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';

export const Product = ({ product }: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product}>
			<div className={styles.logo}><img src={product.image} alt={product.title} /></div>
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
			<div className={styles.rateTitle}>{product.reviewCount} 
				{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
			<Divider className={styles.hr}/>
			<div className={styles.description}>{product.description}</div>
			<div className={styles.feature}>features</div>
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
			<Divider className={styles.hr}/>
			<div className={styles.actions}>
				<Button appearance='primary'>Get more</Button>
				<Button appearance='ghost' arrow={'right'} className={styles.reviewButton}>Read reviews</Button>
			</div>
		</Card>
	);	
};