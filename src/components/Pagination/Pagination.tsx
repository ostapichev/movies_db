import {FC} from 'react';
import {options} from "../../constants";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";


const Pagination: FC = () => {
    const dispatch = useAppDispatch();
    const {prev_page, next_page, page} = useAppSelector(state => state.movieReducer);
    const [, setQuery] = useSearchParams();
    const prev = () => {
        console.log('prev');
    }
    const next = () => {
        console.log('next');
    }


    return (
        <div>
            <button onClick={prev}>&#60;&#60; prev page</button>
            <h1>Choice a movie</h1>
            <button onClick={next}>next page &#62;&#62;</button>
        </div>
    );
};

export {
    Pagination
};