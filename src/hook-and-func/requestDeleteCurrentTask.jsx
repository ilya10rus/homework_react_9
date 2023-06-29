export const requestDeleteCurrentTask = (id) => {
	fetch(`http://localhost:3004/todos/${id}`, {
		method: 'DELETE',
	});
};
