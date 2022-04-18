import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};
	return (
		<div className="todo">
			<li className="todo-item list-group-item">
				{text}
				<button onClick={deleteHandler} className="trash">
					🗑️
				</button>
			</li>
			{/* <button className="check">✔️</button> */}
		</div>
	);
};

export default Todo;
