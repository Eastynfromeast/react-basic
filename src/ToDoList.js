function ToDoList() {
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

export default ToDoList;
