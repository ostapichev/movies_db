import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {axiosService} from "./axios.service";
import {options, urls} from "../constants";


let headers = options.headers;
const movieService = {
    getAll: (): IRes<IMovie[]> => axiosService.get(urls.movies, {headers})
}

export {
    movieService
};