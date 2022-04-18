import React from "react";
import "../../styles/Form.css";

const Form = ({ inputText, setInputText, setTodos, todos }) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completedc: false, id: Math.random() * 1000 },
		]);
		setInputText("");
	};

	const onUserTyping = (e) => {
		if (e.keyCode === 13) {
			console.log("---->", e.target.value);
		}
	};

	return (
		<form>
			<input
				type="text"
				className="todo-input border d-flex justify-content-center"
				onChange={inputTextHandler}
				value={inputText}
			/>
			<button
				className="todo-button"
				type="submit"
				onClick={submitTodoHandler}></button>
			{/* <div className="select">
				<select name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div> */}
		</form>
	);
};

export default Form;
