import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {genreService} from "../../services/";
import {IDataResponse, IGenre, IGenres} from "../../interfaces";


interface IState {
    genres: IGenre[]
}

const initialState: IState = {
    genres: []
}

const getAll = createAsyncThunk<IGenre[], void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data}: IDataResponse = await genreService.getAll();
            const {genres}: IGenres = data;
            return genres;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload;
        });
    }
});

const {actions, reducer: genreReducer} = slice;
const genreActions = {
    ...actions,
    getAll
};

export {
    genreActions,
    genreReducer
};