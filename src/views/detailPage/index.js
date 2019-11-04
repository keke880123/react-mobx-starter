import React from 'react';
import { inject, observer } from 'mobx-react';
import './style.scss';
import { updateSize } from '../../utils/size';
import { decorate, computed, reaction } from 'mobx';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateSize = updateSize.bind(this, this.props.store);
        this.updateSize();
        this.state = {
            id: this.props.store.router.params.num
        };
    }
    componentDidMount() {
        console.log('mounted');
        window.addEventListener('resize', this.updateSize);
    }
    componentWillUnmount() {
        console.log('unmounted');
        window.removeEventListener('resize', this.updateSize);
    }

    render() {
        const { width, height } = this.props.store.styleStore;
        return (
            <div className={'container-DetailPage'}>
                <img src={`https://picsum.photos/id/${this.state.id}/${Math.floor(width / 1.5)}/${Math.floor(height / 1.5)}`} alt="" />
            </div>
        );
    }
}

export default inject('store')(observer(DetailPage));
