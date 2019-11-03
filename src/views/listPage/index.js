import React from 'react';
import { toJs } from 'mobx';
import { inject, observer } from 'mobx-react';
import ListComponent from './components/listComponent';
import './style.scss';
import { reaction, decorate, computed } from 'mobx';

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
    get getMyList() {
        console.log('computed');
        return this.props.store.sampleDataStore.list.map((value) => {
            let strArray = value.download_url.split('/');
            strArray[strArray.length-2] = Math.floor(this.props.store.styleStore.width/3);
            strArray[strArray.length-1] = Math.floor(this.props.store.styleStore.height/10);
            const newValue = {...value, download_url: strArray.join('/')}
            return newValue;
        });
    }

    render() {
        return (
            <div className={'container-ListPage'}>
                <div className={'img-box'}>
                    {this.getMyList.map((value, index) => {
                        return <ListComponent item={value} key={index} />;
                    })}
                </div>
            </div>
        );
    }
}

decorate(ListPage, {
    getMyList: computed
})

export default inject('store')(observer(ListPage));
