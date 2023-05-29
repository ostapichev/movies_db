import {IMovie, IMovieResponse, IResults} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const getAll = createAsyncThunk<IMovie[],  void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
             const {data}: IMovieResponse = await movieService.getAll();
             const {results}: IResults  = data;
             return results;
        } catch (e) {
             const err = e as AxiosError;
             return rejectWithValue(err.response.data);
        }
    }
)

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
    }
});

const {actions, reducer: movieReducer} = slice;
const movieActions = {
    ...actions,
    getAll
};

export {
    movieActions,
    movieReducer
};