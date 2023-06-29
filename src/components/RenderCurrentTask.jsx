import { requestDeleteCurrentTask } from '../hook-and-func';
import { useState } from 'react';
import { requestUpdaitingTask } from '../hook-and-func';
import { useParams, NavLink } from 'react-router-dom';
import style from './RenderCurrentTask.module.css';
import { useEffect } from 'react';

export const RenderCurrentTask = ({refresh}) => {
	const [removeText, setRemoveText] = useState('');
	const [removeTask, setRemoveTask] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [todos, setTodos] = useState([]);
	const param = useParams();
	
	useEffect(() => {
		const id = param.id
		fetch(`http://localhost:3004/todos/${id}`)
			.then((loadedData) => loadedData.json())
			.then((data) => {
				setTodos(data);
			})	
	}, [param, refresh])

	const {id,title, userId} = todos
	
	return (
		<div key={id} className={style.box}>
			<NavLink to="/" onClick={() => refresh()} className={style.MainPageBtn}>
				↶
			</NavLink>
			{isDeleting ? (
				<div className={style.textByDeleteTask}>Задача успешно удалена... </div>
			) : (
				<div className={style.currentTodo}>
					{(title === undefined)?('Извините, такой задачи нету....'):title}
					<div className={style.btns}>
						{removeTask ? (
							<form className={style.formRemove}>
								<input
									type="text"
									placeholder="Желаемый текст..."
									value={removeText}
									onChange={({ target }) => setRemoveText(target.value)}
								/>
								<button
									className={style.btnRemoveInForm}
									type="submit"
									onClick={() => {
										requestUpdaitingTask(
											removeText,
											id,
											userId,
											refresh,
										);
										setRemoveTask(false);
									}}
									disabled={removeText.trim() === ''}
								>
									Изменить
								</button>
								<button
									className={style.btnCancel}
									onClick={() => setRemoveTask(false)}
								>
									Отменить
								</button>
							</form>
						) : (
							<button
								className={style.btnRemove}
								onClick={() => setRemoveTask(true)}
							>
								Изменить задачу
							</button>
						)}
						<button
							className={style.btnDel}
							onClick={() => {
								setIsDeleting(true);
								requestDeleteCurrentTask(id);
							}}
						>
							Удалить задачу
						</button>
					</div>
				</div>
			)}
		</div>
	);
};