import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {MoviesPage} from "./pages";
import {useAppDispatch} from "./hooks";
import {useEffect} from "react";
import {movieActions} from "./redux/slices";


const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch]);

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}/>
            <Route index element={<Navigate to={'movies'}/>}/>
            <Route path={'movies'} element={<MoviesPage/>}/>
        </Routes>
    );
}

export default App;
