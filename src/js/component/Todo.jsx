import React from "react";
//css style
import "../../styles/Todo.css";

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

	return (
		<div className="todo border">
			<li className="todo-item list-group-item d-flex justify-content-center">
				{text}
				<button onClick={deleteHandler} className="trash">
					X
				</button>
			</li>
		</div>
	);
};

export default Todo;
