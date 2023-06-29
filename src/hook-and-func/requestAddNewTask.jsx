export const requestAddNewTask = (title, userId, refresh) => {
	fetch('http://localhost:3004/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			userId: +userId,
			title: title,
			completed: false,
		}),
	}).finally(refresh());
};
