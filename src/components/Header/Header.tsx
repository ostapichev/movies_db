import {FC} from 'react';
import {NavLink} from "react-router-dom";


const Header: FC = () => {
    return (
        <div>
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
        </div>
    );
};

export {
    Header
};