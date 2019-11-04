import React from 'react';
import { inject, observer } from 'mobx-react';
import ListComponent from './components/listComponent';
import './style.scss';

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateSize = this.updateSize.bind(this);
        this.updateSize();
        this.props.store.sampleDataStore.setList();
    }
    componentDidMount() {
        console.log('component mount');
        window.addEventListener('resize', this.updateSize);
    }
    componentWillUnmount() {
        console.log('component unmount');
        window.removeEventListener('resize', this.updateSize);
    }
    updateSize() {
        this.props.store.styleStore.setSize(window.innerWidth, window.innerHeight);
    }

    render() {
        return (
            <div className={'container-ListPage'}>
                <div className={'img-box'}>
                    {this.props.store.sampleDataStore.getMyList.map((value, index) => {
                        return <ListComponent item={value} key={index} />;
                    })}
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(ListPage));
