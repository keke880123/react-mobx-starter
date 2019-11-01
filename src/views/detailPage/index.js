import React from 'react';
import { inject, observer } from 'mobx-react';

class DetailPage extends React.Component {
    render() {
        return (
            <div>
                <h3>detail page</h3>
            </div>
        );
    }
}

export default inject('store')(observer(DetailPage));
