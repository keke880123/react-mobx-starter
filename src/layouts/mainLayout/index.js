import React from 'react';
import { inject, observer } from 'mobx-react';
import ListPage from '../../views/listPage';
import DetailPage from '../../views/detailPage';
import Header from './components/header';

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'container-MainLayout'}>
                <Header title={this.props.page}></Header>
                {(() => {
                    switch (this.props.page) {
                        case 'detail':
                            return <DetailPage />;
                        default:
                            return <ListPage />;
                    }
                })()}
            </div>
        );
    }
}

export default inject('store')(observer(MainLayout));
