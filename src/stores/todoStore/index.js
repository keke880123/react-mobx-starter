import { decorate, observable, action, computed, reaction } from 'mobx';
import { addTodo, getTodoList, toggleTodo, removeTodo } from '../../api/todoListApi';

class TodoStore {
    constructor(store) {
        this.store = store;
    }

    todoList = [];

    getTodoList = async () => {
        console.log('get todo list');
        const result = await getTodoList();
        // console.log('result', result);
        this.todoList = result.data;
    };
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
    toggleCheckbox = async id => {
        console.log('toggle', id);
        const result = await toggleTodo(id);
        console.log('result', result);
        this.todoList.forEach(value => {
            if (value._id == result.data._id) {
                value.isSolved = result.data.isSolved;
            }
        });
    };
    removeTodo = async id => {
        console.log('remove', id);
        const result = await removeTodo(id);
        if (result.msg == 'success') {
            this.todoList = this.todoList.filter(value => {
                return value._id != id;
            });
        }
    };
}

decorate(TodoStore, {
    todoList: observable,
    getTodoList: action,
    addTodoList: action,
    toggleCheckbox: action,
    removeTodo: action
});

export default TodoStore;
