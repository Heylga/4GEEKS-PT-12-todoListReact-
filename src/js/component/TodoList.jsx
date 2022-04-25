import React from "react";
import Todo from "../component/Todo.jsx";
//css style
import "../../styles/TodoList.css";

const TodoList = ({ todos, setTodos }) => {
	console.log(todos);
	return (
		<div className="todo-container ">
			<ul className="todo-list list-group ">
				{todos.map((todo) => (
					<Todo
						setTodos={setTodos}
						todos={todos}
						key={todo.id}
						text={todo.text}
						todo={todo}
					/>
				))}
				<div className="footer">
					<li className="d-flex justify-content-center list-group-item">
						<h5>{todos.length} item left</h5>
					</li>
					<div className="list-group-item shadow bottom "></div>
					<div className="list-group-item shadow bottom-leaf"></div>
					<div className="list-group-item shadow bottom-last"></div>
				</div>
			</ul>
		</div>
	);
};

export default TodoList;
