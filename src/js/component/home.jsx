import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Importing Components
import Form from "../component/Form.jsx";
import TodoList from "../component/TodoList.jsx";
import Todo from "../component/Todo.jsx";

//css style
import index from "../../styles/index.css";

//create your first component
const Home = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="web">
			<header>
				<h1 className="text-center display-1">todos</h1>
			</header>
			<Form
				className="d-flex justify-content-center list-group-item w-25 fs-4 py-3 shadow p-3"
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default Home;
