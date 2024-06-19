import { useEffect, useState } from "react";
import Movie from "./Movie";
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
		setMovies(json.data.movies);
		setIsLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<h1>Welcome to My Movie List!</h1>
					<ul>
						{movies.map(movie => (
							<Movie key={movie.id} title={movie.title} coverImg={movie.medium_cover_image} summary={movie.summary} genres={movie.genres} />
						))}
					</ul>
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
