import React from "react";

const Todo = ({ text }) => {
	return (
		<div className="todo">
			<li className="todo-item">{text}</li>
			{/* <button className="check">✔️</button>
			<button className="trash">🗑️</button> */}
		</div>
	);
};

export default Todo;
