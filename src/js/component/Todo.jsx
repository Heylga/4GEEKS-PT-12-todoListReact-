import React from "react";
//css style
import "../../styles/Todo.css";

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
		console.log(todo);
	};

	return (
		<div className="todo d-flex justify-content-center">
			<li className="list-group-item d-flex justify-content-center">
				{text}
				<button onClick={deleteHandler} className="trash ">
					X
				</button>
			</li>{" "}
		</div>
	);
};

export default Todo;
