import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IDataResponse, IResults} from "../../interfaces";
import {movieService} from "../../services";


interface IState {
    movies: IMovie[],
    prev_page: boolean,
    next_page: boolean,
    page: number
}

const initialState: IState = {
    movies: [],
    prev_page: false,
    next_page: true,
    page: 1
}

const getAll = createAsyncThunk<IMovie[], void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
             const {data}: IDataResponse = await movieService.getAll();
             const {results}: IResults = data;
             return results;
        } catch (e) {
             const err = e as AxiosError;
             return rejectWithValue(err.response.data);
        }
    }
);

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