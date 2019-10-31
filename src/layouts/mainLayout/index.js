import React from 'react';
import { inject, observer } from 'mobx-react';

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        // console.log('page', this.props.store.router.params.page);
        console.log('page', this.props.store.routeStore.page);
    }
    render() {
        return (
            <div>
                <h2>main layout</h2>
            </div>
        );
    }
}

export default inject('store')(observer(MainLayout));
