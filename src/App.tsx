import axios from 'axios';

import {options, urls} from "./constants";


const App = () => {
    const {url, params, headers} = options;

    axios.get(`${url}${urls.movies}`, {params, headers})
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
