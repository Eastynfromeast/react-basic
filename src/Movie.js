import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
	return (
		<li>
			<img src={coverImg} alt={`${title} 's poster`} />
			<div>
				<h2>{title}</h2>
				<p>{summary}</p>
				<ul>
					{genres.map((g, i) => (
						<li key={i}>{g}</li>
					))}
				</ul>
			</div>
		</li>
	);
}

Movie.propTypes = {
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.array,
};

export default Movie;
