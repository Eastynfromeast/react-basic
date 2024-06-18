import { useEffect, useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onChangeKeyword = event => setKeyword(event.target.value);
	const onClick = () => setCounter(prev => prev + 1);

	useEffect(() => {
		console.log("I run only once");
	}, []);
	useEffect(() => {
		if (keyword !== "" && keyword.length > 5) {
			console.log("SEARCH FOR ", keyword);
		}
	}, [keyword]);
	useEffect(() => {
		console.log("I run when 'counter' changes");
	}, [counter]);
	return (
		<div>
			<input value={keyword} onChange={onChangeKeyword} type="text" placeholder="Search bar here" />
			<h1>{counter}</h1>
			<button onClick={onClick}>click me</button>
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


*/
