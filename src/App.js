import { useEffect, useState } from "react";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [value, setValue] = useState(0);
	const [amount, setAmount] = useState(0);
	const onChangeAmount = event => setAmount(event.target.value);

	const onSelect = e => setValue(e.target.value);
	/* useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then(response => response.json())
			.then(json => {
				setCoins(json);
				setIsLoading(false);
			});
	}, []); */

	return (
		<div>
			{isLoading ? null : (
				<>
					<h1>The Coin Tracker {isLoading ? "" : `(${coins.length})`}</h1>
					{isLoading ? (
						<h3>loading...</h3>
					) : (
						<>
							<select onSelect={onSelect}>
								{coins.map((coin, index) => {
									return (
										<option value={coin.id} key={coin.id}>
											{coin.name}({coin.symbol}) : {coin.quotes.USD.price}
										</option>
									);
								})}
							</select>
							<hr />
							<div>
								<label htmlFor="amount">Number?</label>
								<input value={amount} onChange={onChangeAmount} type="number" id="amount" placeholder="Put any number..." />
								<p>{value}</p>
							</div>
						</>
					)}
				</>
			)}
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
