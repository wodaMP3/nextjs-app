import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../button/button';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	return (
		<div className={cn(className, styles.search)}>
			<Input 
				className={styles.input}
				placeholder='search...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Button
				appearance="primary"
				className={styles.button}
				onClick={() => { }}
			>
				<GlassIcon />
			</Button>
		</div>
	);
};