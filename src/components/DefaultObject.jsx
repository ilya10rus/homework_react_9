import { RenderApp } from './RenderApplication';

export const DefaultObject = ({ todos, refresh }) => {
	return todos.map(({ id, title, userId }) => (
		<RenderApp id={id} title={title} refresh={refresh} userId={userId} />
	));
};
