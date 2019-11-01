import React from 'react';
import { inject, observer } from 'mobx-react';
import '../style.scss';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'container-HeaderComponent'}>
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default inject('store')(observer(HeaderComponent));
