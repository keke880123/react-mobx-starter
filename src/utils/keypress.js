export function enterKey(e) {
    if (e.keyCode == 13) {
        // enter key
        this.props.store.todoStore.addTodoList(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }
}
