import React from 'react';
import { inject, observer } from 'mobx-react';
import './style.scss';
import {updateSize} from '../../utils/size';
import { decorate, computed, reaction } from 'mobx';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateSize = updateSize.bind(this);
        this.updateSize();
        this.state = {
            id: this.props.store.router.params.num,
            width: Math.floor(this.props.store.styleStore.width/1.5),
            height: Math.floor(this.props.store.styleStore.height/1.5)
        }
        // console.log('state', this.state);
    }
    componentDidMount() {
        console.log('mounted');
        window.addEventListener('resize', this.updateSize);
        this.autoUpdateSize = reaction(() => {
            return {
                width: this.props.store.styleStore.width,
                height: this.props.store.styleStore.height
            }
        }, (data, reaction) => {
            this.setState({
                width: Math.floor(this.props.store.styleStore.width/1.5),
                height: Math.floor(this.props.store.styleStore.height/1.5)
            })
        })
    }
    componentWillUnmount() {
        console.log('unmounted');
        window.removeEventListener('resize', this.updateSize);
        this.autoUpdateSize();
    }

    // get getDetail() {
    //     return this.props.store.sampleDataStore.list.find((value) => {
    //         return value.id === this.state.id
    //     })
    // }

    render() {
        return (
            <div className={'container-DetailPage'}>
                <img src={`https://picsum.photos/id/${this.state.id}/${this.state.width}/${this.state.height}`} alt=""/>
            </div>
        );
    }
}

decorate(DetailPage, {
    // getDetail: computed
})

export default inject('store')(observer(DetailPage));
