import React from "react";
import "../../styles/Form.css";

const Form = ({ inputText, setInputText, setTodos, todos }) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([...todos, { text: inputText, id: Math.random() * 1000 }]);
		setInputText("");
	};

	const onUserTyping = (e) => {
		if (e.keyCode === 13) {
			console.log("---->", e.target.value);
		}
	};

	return (
		<form class=" d-flex justify-content-center">
			<input
				type="text"
				className="todo-input border d-flex justify-content-center"
				onChange={inputTextHandler}
				value={inputText}
				placeholder="What needs to be done?"
				onKeyDown={onUserTyping}
			/>
			<button
				className="todo-button border d-flex justify-content-center"
				type="submit"
				onClick={submitTodoHandler}></button>
		</form>
	);
};

export default Form;
