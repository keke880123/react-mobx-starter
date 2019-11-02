import React from 'react';
import { inject, observer } from 'mobx-react';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('value', this.props.item);
        // console.log('props', this.props);
    }

    render() {
        return (
            <div className={'container-ListComponent'}>
                <div className={'img-box'}>
                    <img src={this.props.item.download_url} alt=""/>
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(ListComponent));
