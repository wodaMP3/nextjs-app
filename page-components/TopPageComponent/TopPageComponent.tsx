import { Htag, Tag, HhData, Advantages, Sort } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispatchSort] = 
		useReducer(sortReducer, { products, sort: SortEnum.Rating });

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	return (
	<div className={styles.wrapper}>
		<div className={styles.title}>
			<Htag tag='h1'>{page.title}</Htag>
			{products && <Tag color='grey' size='m'>{products.length}</Tag>}
			<Sort sort={sort} setSort={setSort}/>
		</div>
		<div>
			{sortedProducts && sortedProducts.map(p => (<div key={p._id}>{p.title}</div>))}
		</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Offers {page.category}</Htag>
				<Tag color='red' size='m'>Hh.ru</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag='h2'>Advantages</Htag>
				<Advantages advantages={page.advantages}/>
			</>
			}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Skills u can get</Htag>
			{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
		</div>
	);
};