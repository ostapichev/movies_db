import {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {MoviesPage, HomePage, GenresPage} from "./pages";
import {useAppDispatch} from "./hooks";
import {genreActions, movieActions} from "./redux/slices";


const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll());
        dispatch(genreActions.getAll());
    }, [dispatch]);

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
