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
        this.state = { list: []};
    }
    componentDidMount() {
        console.log('component mount');
        window.addEventListener('resize', this.updateSize);
        this.autoUpdateList = reaction(() => {
            return {
                width: this.props.store.styleStore.width,
                height: this.props.store.styleStore.height,
                list: this.props.store.sampleDataStore.list
            }
        }, (data, reaction) => {
            const list = data.list.map((value, index) => {
                let strArray = value.download_url.split('/');
                strArray[strArray.length-2] = Math.floor(parseInt(data.width)/3);
                strArray[strArray.length-1] = Math.floor(parseInt(data.height)/10);
                value.download_url = strArray.join('/');
                return value;
            });
            this.setState({
                list: list
            })
        })
    }
    componentWillUnmount() {
        console.log('component unmount');
        window.removeEventListener('resize', this.updateSize);
        this.autoUpdateList();
    }
    updateSize() {
        this.props.store.styleStore.setSize(window.innerWidth, window.innerHeight);
    }

    render() {
        return (
            <div className={'container-ListPage'}>
                <div className={'img-box'}>
                    {this.state.list.map((value, index) => {
                        return <ListComponent item={value} key={index} />;
                    })}
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(ListPage));
