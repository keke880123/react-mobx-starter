import React from 'react';
import { inject, observer } from 'mobx-react';
import '../style.scss';
import views from '../../../router';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', props);
    }

    goToDetail = (str) => {
        if(str == 'detail') {
            this.props.store.router.goTo(views.detailPage, {num:123}, this.props.store);
        } else {
            this.props.store.router.goTo(views.listPage, {}, this.props.store);
        }
    }

    render() {
        return (
            <div className={'container-HeaderComponent'}>
                {/*<button onClick={() => this.goToDetail('detail')}>goto</button>*/}
                {(() => {
                    if(this.props.title === 'detail') {
                        return <button className={'back-button'} onClick={() => this.goToDetail('list')}>{'<'}</button>;
                    }
                })()}
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default inject('store')(observer(HeaderComponent));
