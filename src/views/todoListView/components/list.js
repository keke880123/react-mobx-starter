import React from 'react';
import { inject, observer } from 'mobx-react';

class List extends React.Component {
    constructor(props) {
        super(props);
        console.log('item', this.props.item);
    }

    checkboxClick = () => {
        // console.log('checkbox toggle');
        this.props.store.todoStore.toggleCheckbox(this.props.item._id);
    };
    removeButtonClick = () => {
        this.props.store.todoStore.removeTodo(this.props.item._id);
    };

    render() {
        return (
            <div className={'container-List'}>
                <div className={['checkbox'].join(' ')} onClick={this.checkboxClick}>
                    {(() => {
                        if (this.props.item.isSolved != 0) {
                            return 'X';
                        }
                    })()}
                </div>
                <div className={['content', this.props.item.isSolved != 0 ? 'checked' : ''].join(' ')}>{this.props.item.content}</div>
                <button className={'delete-button'} onClick={this.removeButtonClick}>
                    삭제
                </button>
            </div>
        );
    }
}

export default inject('store')(observer(List));
