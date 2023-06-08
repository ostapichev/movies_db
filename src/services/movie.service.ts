import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {axiosService} from "./axios.service";
import {options, urls} from "../constants";


const {headers, params} = options;
const {page} = params;

console.log(page)
const movieService = {
    getAll: (page = 1): IRes<IMovie[]> => axiosService.get(urls.movies, {headers, params}),
    pagination: (): any => axiosService.get(urls.movies, {headers, params})
}

export {
    movieService,
};