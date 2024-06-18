import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChangeTodo = event => setToDo(event.target.value);
	const onSubmit = event => {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		console.log(toDo);
		setToDo("");
		setToDos(currentArray => [toDo, ...currentArray]);
	};

	const onClickDelete = index => {
		setToDos(currentArr => currentArr.filter((_, arrIndex) => index !== arrIndex));
		console.log(toDos);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input onChange={onChangeTodo} value={toDo} type="text" placeholder="Write your to do" />
				<button>Add To Do</button>
			</form>
			<hr />
			<ul>
				{toDos.map((toDo, index) => {
					return (
						<li key={index}>
							{toDo}
							<button onClick={() => onClickDelete(index)}>Delete</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;

/*
    Effects
        sometimes you want to be able to run some code only on the first render
        when your state changed all the code will be running again 
        
        How can we limit rendering of some code? 
        => useEffect
            useEffect is a React Hook that lets you synchronize a component with an external system.
            useEffect(setup,dependencies)
            useEffect is kind of depense to Reat JS not to rerender every time a state changes

    Cleanup
        cleanup function allows you to  do something when your component is destroyed
        Your setup function may also optionally return a cleanup function.
*/
