import React from 'react';
import { toJs } from 'mobx';
import { inject, observer } from 'mobx-react';
import ListComponent from './components/listComponent';
import './style.scss';
import { reaction } from 'mobx';

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateSize = this.updateSize.bind(this);
        this.updateSize();
        this.props.store.sampleDataStore.setList();
        // this.state = { list: []};
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
        const {list} = this.props.store.sampleDataStore;
        const {width, height} = this.props.store.styleStore;
        return (
            <div className={'container-ListPage'}>
                <div className={'img-box'}>
                    {list.map((value, index) => {
                        let strArray = value.download_url.split('/');
                        strArray[strArray.length-2] = Math.floor(parseInt(width)/3);
                        strArray[strArray.length-1] = Math.floor(parseInt(height)/10);
                        // value.download_url = strArray.join('/');
                        const newValue = {...value, download_url: strArray.join('/')}
                        // return <ListComponent item={value} key={index} />;
                        return <ListComponent item={newValue} key={index} />;
                    })}
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(ListPage));
