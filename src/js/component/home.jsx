import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Importing Components
import Form from "../component/Form.jsx";
import TodoList from "../component/TodoList.jsx";
import Todo from "../component/Todo.jsx";

//create your first component
const Home = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<header>
				<h1>TODO list</h1>
			</header>
			<Form
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
			/>
			<TodoList todos={todos} />
			<Todo />
		</div>
	);
};

export default Home;
