import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IDataResponse, IResults} from "../../interfaces";
import {movieService} from "../../services";
import {options} from "../../constants";


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
    page: +options.params.page
}

const getAll = createAsyncThunk<IMovie[], void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue, getState}) => {
        try {
             const state = getState() as { movieSlice: IState };
             const {data}: IDataResponse = await movieService.getAll();
             const {results, page: responsePage}: IResults = data;
             console.log(responsePage);
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
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
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