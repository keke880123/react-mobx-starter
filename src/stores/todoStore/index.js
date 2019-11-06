import { decorate, observable, action, computed, reaction } from 'mobx';
import { addTodo } from '../../api/todoListApi';

class TodoStore {
    constructor(store) {
        this.store = store;
    }

    todoList = [];

    getTodoList = async () => {};
    addTodoList = async todo => {
        console.log('todo', todo);
        const todoObject = {};
        todoObject.content = todo;
        todoObject.idx = this.todoList.length;
        try {
            const result = await addTodo(todoObject);
            this.todoList.push(result);
            console.log('list', this.todoList);
        } catch (err) {
            console.log('err', err);
        }
    };
}

decorate(TodoStore, {
    todoList: observable,
    getTodoList: action,
    addTodoList: action
});

export default TodoStore;
