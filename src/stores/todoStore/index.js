import { decorate, observable, action, computed, reaction } from 'mobx';

class TodoStore {
    constructor(store) {
        this.store = store;
    }

    todoList = [];

    getTodoList = async () => {};
    addTodoList = async todo => {
        console.log('todo', todo);
    };
}

decorate(TodoStore, {
    todoList: observable,
    getTodoList: action,
    addTodoList: action
});

export default TodoStore;
