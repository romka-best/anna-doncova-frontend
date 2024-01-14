import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as process from 'process';

import { Environment } from 'utils/environment';

let baseURL;
if (process.env.NODE_ENV === Environment.Production) {
    baseURL = 'https://anna-doncova-kxcull6y4q-ez.a.run.app/api';
} else if (process.env.NODE_ENV === Environment.Test) {
    baseURL = 'https://anna-doncova-ihwfefb5tq-ez.a.run.app/api';
} else {
    baseURL = 'http://localhost:8000/api';
}

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosRetry(api);

export default api;
