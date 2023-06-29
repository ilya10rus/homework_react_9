import { useState, useEffect } from 'react';

export const useRequestGetData = (sort, searchFilter, refreshTodoList) => {
	const [isLoading, setIsLoading] = useState(false);
	const [todos, setTodos] = useState([]);
	
	useEffect(() => {
		setIsLoading(true);
		fetch(`http://localhost:3004/todos?q=${searchFilter}`)
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setTodos(loadedProducts);
			})
			.finally(() =>{console.log(sort); setIsLoading(false)})
	}, [sort, searchFilter, refreshTodoList]);
	return {
		isLoading,
		todos,
	};
};
