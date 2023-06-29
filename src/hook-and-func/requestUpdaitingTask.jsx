export const requestUpdaitingTask = (title, id, userId, refresh) => {
	fetch(`http://localhost:3004/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			userId: userId,
			title: title,
			completed: false,
		}),
	}).finally(refresh());
};
