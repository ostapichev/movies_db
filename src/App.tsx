import axios from 'axios';

import {options, urls} from "./constants";


const App = () => {
    const {params, url} = options;

    axios.get(`${url}${urls.movies}`, {params})
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });

    return (
        <div>
            App
        </div>
    );
}

export default App;
