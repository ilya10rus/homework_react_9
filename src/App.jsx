import style from './App.module.css';
import { useState } from 'react';
import { RenderCurrentTask, MainPage} from './components';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NotFound } from './components/NotFound';

export const App = function () {
	const [refreshTodoList, setRefreshTodoList] = useState(false);
	const refresh = () => setRefreshTodoList(!refreshTodoList);
	
	
	return (
		<div className={style.wrapper}>
				<div className={style.container}>
					
					<Routes>
						<Route path="/" element={<MainPage refresh={refresh}
						refreshTodoList={refreshTodoList}/>} />
						<Route
							path="/task/:id"
							element={
								<RenderCurrentTask refresh={refresh}/>
							}
						/>
						<Route path="/404" element={<NotFound />} />
						<Route path="*" element={<Navigate to="/404" />} />
					</Routes>
				</div>
		</div>
	);
};
