import React from 'react';
import { inject, observer } from 'mobx-react';
import './style.scss';
import { enterKey } from '../../utils/keypress';

class TodoListView extends React.Component {
    constructor(props) {
        super(props);
        this.enterKey = enterKey.bind(this);
        this.state = {
            inputRef: React.createRef(),
            inputValue: ''
        };
    }
    componentDidMount() {
        console.log('input', this.state.inputRef);
        this.state.inputRef.current.addEventListener('keypress', this.enterKey);
    }
    componentWillUnmount() {
        this.state.inputRef.current.removeEventListener('keypress', this.enterKey);
    }

    // testBtn = () => {
    //     console.log('state', this.state);
    // };

    render() {
        return (
            <div className={'container-TodoListView'}>
                <div ref={this.state.inputRef} className={'input-box'}>
                    <input
                        type="text"
                        placeholder="할일을 입력해 주세요"
                        value={this.state.inputValue}
                        onChange={e => {
                            this.setState({ inputValue: e.target.value });
                        }}
                    />
                </div>
                {/* <button onClick={this.testBtn}>test</button> */}
            </div>
        );
    }
}

export default inject('store')(observer(TodoListView));
