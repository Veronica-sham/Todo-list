import axios from 'axios';

class CounterApi {
    static getCounterSize() {
        return axios.get("https://5e9ed3a0fb467500166c47b3.mockapi.io/counters");
    }

    static updateCounterSize(data) {
        return axios.put("https://5e9ed3a0fb467500166c47b3.mockapi.io/counters/9", data);
    }

}

export default CounterApi;