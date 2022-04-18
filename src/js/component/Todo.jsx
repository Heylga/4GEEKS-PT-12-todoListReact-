import React from "react";
//css style
import "../../styles/Todo.css";

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};
	return (
		<div className="todo border" style={{ width: "410px" }}>
			<li className="todo-item list-group-item d-flex justify-content-center">
				{text}
				<button onClick={deleteHandler} className="trash">
					X
				</button>
			</li>
			{/* <button className="check">✔️</button> */}
		</div>
	);
};

export default Todo;
