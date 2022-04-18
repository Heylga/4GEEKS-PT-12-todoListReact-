import React from "react";
import Todo from "../component/Todo.jsx";

const TodoList = ({ todos, setTodos }) => {
	console.log(todos);
	return (
		<div className="todo-container">
			<ul className="todo-list list-group shadow p-3 mb-5 bg-body rounded w-50 p-3 position-absolute top-50 start-50 translate-middle-x">
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						text={todo.text}
						todos={todos}
						todo={todo}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
