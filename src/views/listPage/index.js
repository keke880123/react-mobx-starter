import React from 'react';
import { toJs } from 'mobx';
import { inject, observer } from 'mobx-react';
import ListComponent from './components/listComponent';

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.store.sampleDataStore.setList();
    }
    componentWillMount() {}
    render() {
        return (
            <div>
                <h3>list page</h3>
                {this.props.store.sampleDataStore.getList.map((value, index) => {
                    return <ListComponent item={value} key={index} />;
                })}
                <ListComponent></ListComponent>
            </div>
        );
    }
}

export default inject('store')(observer(ListPage));
