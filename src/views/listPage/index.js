import React from 'react';
import { toJs } from 'mobx';
import { inject, observer } from 'mobx-react';
import ListComponent from './components/listComponent';
import './style.scss';

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateSize();
        this.props.store.sampleDataStore.setList();
        // console.warn('this', this);
        // console.log('window', window);
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateSize.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize.bind(this));
    }
    updateSize() {
        this.props.store.styleStore.setSize(window.innerWidth, window.innerHeight);
    }

    render() {
        return (
            <div className={'container-ListPage'}>
                {this.props.store.sampleDataStore.getList.map((value, index) => {
                    return <ListComponent item={value} key={index} />;
                })}
            </div>
        );
    }
}

export default inject('store')(observer(ListPage));
