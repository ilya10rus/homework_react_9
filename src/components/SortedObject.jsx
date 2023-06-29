import { RenderApp } from './RenderApplication';

export const SortedObject = ({ todos, refresh }) => {
	let result = todos.sort(function (a, b) {
		if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
	});
	return result.map(({ id, title, userId }) => (
		<RenderApp id={id} title={title} refresh={refresh} userId={userId} />
	));
};
