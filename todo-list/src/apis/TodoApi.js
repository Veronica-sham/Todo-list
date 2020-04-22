import axios from 'axios';

class TodoApi {
    static getTodoList() {
        return axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos");
    }

    static postTodoList() {
        return axios.post("https://5e9ec500fb467500166c4658.mockapi.io/todos");
    }
}

export default TodoApi;