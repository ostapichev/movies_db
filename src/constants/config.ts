import {baseURL} from "./urls";
import {TOKEN_API} from "./token";

const options = {
    method: 'GET',
    url: baseURL,
    params: {
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        page: '1',
        sort_by: 'popularity.desc'
    },
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN_API}`
    }
};

export {
    options
};