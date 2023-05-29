import {FC} from 'react';
import {IGenre} from "../../interfaces";


interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre

    return (
        <ul>
            <li>id: {id}</li>
            <li>name: {name}</li>
        </ul>
    );
};

export {
    Genre
};