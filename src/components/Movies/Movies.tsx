import {FC} from 'react';

import {useAppSelector} from "../../hooks";
import {Movie} from "../Movie/Movie";
import {Pagination} from "../Pagination/Pagination";


const Movies: FC = () => {
    const {movies, page} = useAppSelector(state => state.movieReducer);

    return (
        <div>
            <Pagination/>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
            <Pagination/>
        </div>
    );
};

export {
    Movies
};