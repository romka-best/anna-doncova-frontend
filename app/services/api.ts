import axios from 'axios';
import axiosRetry from 'axios-retry';

import { Environment } from 'utils/environment';

const baseURL = process.env.NODE_ENV === Environment.Production ? `https://anna-doncova-kxcull6y4q-ez.a.run.app/api` : `http://localhost:8000/api`;

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosRetry(api);

export default api;
