import { Link } from 'react-router-dom';
import style from './RenderApplication.module.css';


export const RenderApp = ({ id, title }) => {
	return (
		<div className={style.box}>
			<div className={style.todos}>
				<Link key={id} to={`/task/${id}`}>
					{title}
				</Link>
			</div>
		</div>
	);
};

