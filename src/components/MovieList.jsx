import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPosterURL } from 'utils';

const MovieList = ({ movies = [] }) => {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {movies.map(({ id, poster_path, title, overview }) => (
        <li
          key={id}
          className="rounded-xl bg-slate-200 p-2 shadow-md
          hover:-translate-y-1 focus-within:-translate-y-1 transition-transform
          motion-reduce:transition-none"
        >
          <Link to={`/movies/${id}`} className="flex">
            <img
              srcSet={`${getPosterURL('w185', poster_path)} 1x,
                ${getPosterURL('w342', poster_path)} 2x`}
              src={getPosterURL('w185', poster_path)}
              width={92}
              height={138}
              alt={`Poster for ${title}`}
              className="object-contain mr-4 rounded-lg w-[92px]"
            />

            <div>
              <h3 className="text-lg font-medium text-slate-600">{title}</h3>
              <p className="line-clamp-3">{overview}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
