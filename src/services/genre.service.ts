import {options, urls} from "../constants";
import {IRes} from "../types";
import {IGenre} from "../interfaces";
import {axiosService} from "./axios.service";


const headers = options.headers;
const genreService = {
    getAll: (): IRes<IGenre[]> => axiosService.get(urls.genres, {headers})
}

export {
    genreService
};