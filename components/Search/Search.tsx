import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../button/Button';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') {
			goToSearch;
		}
	};

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input 
				className={styles.input}
				placeholder='search...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance="primary"
				className={styles.button}
				onClick={goToSearch}
			>
				<GlassIcon />
			</Button>
		</div>
	);
};