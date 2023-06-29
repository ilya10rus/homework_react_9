import style from './FormTask.module.css';
import { useState } from 'react';
import { requestAddNewTask } from '../hook-and-func';

export const FormTasks = ({ refresh }) => {
	const [valueNewTask, setValueNewTask] = useState('');
	const [userId, setUserId] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		requestAddNewTask(valueNewTask, userId, refresh);
	};

	return (
		<>
			<form onSubmit={onSubmit} className={style.formCreate}>
				<input
					type="text"
					name="userId"
					placeholder="Номер пользователя..."
					value={userId}
					onChange={({ target }) => setUserId(target.value)}
					className={style.userId}
				/>
				<textarea
					type="textarea"
					name="title"
					placeholder="Создай задачу..."
					value={valueNewTask}
					onChange={({ target }) => setValueNewTask(target.value)}
					className={style.create}
				/>
				<button
					type="submit"
					className={style.btn}
					disabled={userId.trim() === '' || valueNewTask.trim() === ''}
				>
					Создать
				</button>
			</form>
		</>
	);
};
