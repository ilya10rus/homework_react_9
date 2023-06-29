import style from './useFormSearch.module.css';
import { useState } from 'react';

export const useFormSearch = () => {
	const [search, setSearch] = useState('');
	const SearchRequest = ({ target }) => {
		setSearch(target.value)
	};

	const FormSearch = () => {
		return (
			<form className={style.FormSearch}>
				<input
					type="text"
					placeholder="Поиск"
					name="search"
					value={search}
					onChange={SearchRequest}
					className={style.search}
				/>
			</form>
		);
	};
	return {
		search,
		FormSearch
	};
};
