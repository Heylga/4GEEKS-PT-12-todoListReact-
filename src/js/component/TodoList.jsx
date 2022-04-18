import React from "react";
import Todo from "../component/Todo.jsx";
//css style
import "../../styles/TodoList.css";

const TodoList = ({ todos, setTodos }) => {
	console.log(todos);
	return (
		<div className="todo-container d-flex justify-content-center">
			<ul className="todo-list list-group">
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
