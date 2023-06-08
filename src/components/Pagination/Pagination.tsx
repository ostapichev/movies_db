import {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import {options} from "../../constants";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices";
import {movieService} from "../../services";


const Pagination: FC = () => {
    const dispatch = useAppDispatch();
    const {prev_page, next_page, page} = useAppSelector(state => state.movieReducer);
    const [, setQuery] = useSearchParams();
    console.log('page: ', page)
    const prev = () => {
        console.log('prev');
    }
    const next = () => {
        setQuery(nextContent => ({...nextContent, page: +nextContent.get('page')+1}));
        options.params.page = String(window.location.href[window.location.href.length-1]);
        console.log(options.params.page);
        dispatch(movieActions.getAll);
    }

    return (
        <div>
            <button onClick={prev} disabled={!prev_page}>&#60;&#60; prev page</button>
            <h1>Choice a movie</h1>
            <button onClick={next} disabled={!next_page}>next page &#62;&#62;</button>
        </div>
    );
};

export {
    Pagination
};