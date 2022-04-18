import React from "react";
import Todo from "../component/Todo.jsx";
//css style
import "../../styles/TodoList.css";

const TodoList = ({ todos, setTodos }) => {
	console.log(todos);
	return (
		<div className="todo-container d-flex justify-content-center">
			<ul className="todo-list list-group border d-flex justify-content-center">
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						text={todo.text}
						todos={todos}
						todo={todo}
					/>
				))}
				<h5>{todos.length} item left</h5>
			</ul>
		</div>
	);
};

export default TodoList;
