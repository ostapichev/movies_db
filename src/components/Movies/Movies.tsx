import {FC} from 'react';

import {useAppSelector} from "../../hooks";
import {Movie} from "../Movie/Movie";


const Movies: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);

    return (
        <div>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {
    Movies
};