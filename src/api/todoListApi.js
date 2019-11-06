import service from '../utils/request';

export function addTodo(params) {
    return service({
        url: 'http://localhost:5000/todo/addTodo',
        method: 'get',
        params: params
    });
}
