import { useEffect, useState } from "react";

function App() {
	const [value, setValue] = useState(0);
	const onClick = () => setValue(prev => prev + 1);
	console.log("i run all the time");

	useEffect(() => {
		console.log("call the api");
	}, []);
	return (
		<div>
			<h1>{value}</h1>
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

*/
