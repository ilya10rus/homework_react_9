import { DefaultObject } from './DefaultObject';
import { SortedObject } from './SortedObject';
import { FormTasks} from './FormTask';
import style from './MainPage.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useRequestGetData, useFormSearch  } from '../hook-and-func';
import { useDebounce } from '../utils';

export const MainPage = ({refreshTodoList,refresh}) => {
    const [selectSort, setSelectSort] = useState('Сортировать...');
	const [sort, setSorting] = useState(false);
    const { FormSearch, search } = useFormSearch();
    const searchFilter = useDebounce(search);
    const { todos, isLoading} = useRequestGetData(sort, searchFilter, refreshTodoList);
    const sorting = ({ target }) => {
        setSelectSort(target.value);
		target.value === 'A-z' ? setSorting(true) : setSorting(false);
	};
   
    return (
        isLoading ? (
            <div className={style.loader}></div>) 
        : (<>{FormSearch()}
        <NavLink to="/" onClick={() => refresh()} className={style.MainPageBtn}>
            Главная
        </NavLink>
        {todos.length === 0 ? (
            <h1 className={style.addTaskText}>Добавить новую задачу</h1>
        ) : (
            ''
        )}
    
        <FormTasks refresh={refresh} />
    
        <select className={style.sort} value={selectSort} onChange={sorting}>
            <option value={'default'}>Без сортировки...</option>
            <option value={'A-z'} >Сортировка по алфавиту</option>
        </select>
    
        {!sort ? (
            <DefaultObject todos={todos} refresh={refresh} />
        ) : (
            <SortedObject todos={todos} refresh={refresh} />
        )}
    </>)
    );
};