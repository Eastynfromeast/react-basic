import { useEffect, useState } from "react";

function Hello() {
	function hiFn() {
		console.log("created:)");
		return byefn;
	}
	function byefn() {
		console.log("destoryed :(");
	}
	useEffect(() => {
		hiFn();
	}, []);
	return <h1>Hello</h1>;
}

function App() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing(prev => !prev);
	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}> {showing ? "Hide" : "Show"}</button>
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
