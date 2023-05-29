import {FC} from 'react';
import {useAppSelector} from "../../hooks";

import {Genre} from "../Genre/Genre";


const Genres: FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer)

    return (
        <div>
            {
                genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {
    Genres
};