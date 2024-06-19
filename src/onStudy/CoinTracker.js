import { useEffect, useState } from "react";

function CoinTracker() {
	const [isLoading, setIsLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [value, setValue] = useState(0);
	const [amount, setAmount] = useState(0);
	const onChangeAmount = event => setAmount(event.target.value);

	const onSelect = e => setValue(e.target.value);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then(response => response.json())
			.then(json => {
				setCoins(json);
				setIsLoading(false);
			});
	}, []);

	return (
		<div>
			<h1>The Coin Tracker {isLoading ? "" : `(${coins.length})`}</h1>
			{isLoading ? (
				<h3>loading...</h3>
			) : (
				<>
					<select onChange={onSelect} value={value}>
						{coins.map((coin, index) => {
							return (
								<option value={index} key={coin.id}>
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
		</div>
	);
}

export default CoinTracker;
