import service from '../utils/request';

export function addTodo(params) {
    return service({
        url: 'http://localhost:5000/todo/addTodo',
        method: 'get',
        params: params
    });
}

export function getTodoList() {
    return service({
        url: 'http://localhost:5000/todo/list',
        method: 'get'
    });
}

export function toggleTodo(id) {
    return service({
        url: `http://localhost:5000/todo/update/${id}`,
        method: 'get'
    });
}

export function removeTodo(id) {
    return service({
        url: `http://localhost:5000/todo/remove/${id}`,
        method: 'get'
    });
}
