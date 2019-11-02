import React from 'react';
import { inject, observer } from 'mobx-react';
import views from '../../../router';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        // console.log('value', this.props.item);
    }

    goToDetail = (id) => {
        // console.log('id', id);
        this.props.store.router.goTo(views.detailPage, {num: id}, this.props.store);
    }

    render() {
        return (
            <div className={'container-ListComponent'} onClick={() => this.goToDetail(this.props.item.id)}>
                <img src={this.props.item.download_url} alt=""/>
                <div className={'content-box'}>
                    {this.props.item.author}
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(ListComponent));
