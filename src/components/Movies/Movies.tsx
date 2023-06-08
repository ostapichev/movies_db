import {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "../Movie/Movie";
import {Pagination} from "../Pagination/Pagination";
import {useSearchParams} from "react-router-dom";
import {movieService} from "../../services";
import {movieActions} from "../../redux/slices";


const Movies: FC = () => {
    const dispatch = useAppDispatch();
    const {movies, page} = useAppSelector(state => state.movieReducer);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery( prev => ({...prev, page: '1'}));
    }, []);

    useEffect(() => {
        movieService.getAll(+query.get('page'))
            .then(response => response.data)
            .then(response => dispatch(movieActions.getAll)
            )}, [query, dispatch]);

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