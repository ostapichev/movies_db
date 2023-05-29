import {FC} from 'react';

import {IMovie} from "../../interfaces";


interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, genre_ids} = movie;

    return (
        <ul>
            <li>is: {id}</li>
            <li>title: {title}</li>
            <li>genres_id: {genre_ids}</li>
        </ul>
    );
};

export {
    Movie
};