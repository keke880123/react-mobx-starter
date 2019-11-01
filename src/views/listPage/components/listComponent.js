import React from 'react';
import { inject, observer } from 'mobx-react';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        // console.log('value', this.props.item);
        console.log('props', this.props);
    }
    render() {
        return (
            <div>
                <h4></h4>
            </div>
        );
    }
}

export default inject('store')(observer(ListComponent));
