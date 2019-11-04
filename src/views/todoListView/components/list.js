import React from 'react';
import { inject, observer } from 'mobx-react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'container-List'}>
                <h1>list</h1>
            </div>
        );
    }
}

export default inject('store')(observer(List));
