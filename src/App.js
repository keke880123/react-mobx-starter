import React from 'react';
// mobx-router
import { RouterStore, MobxRouter, startRouter } from 'mobx-router';
import views from './router';
// mobx
import { Provider } from 'mobx-react';
import RootStore from './stores';
let store = new RootStore();
startRouter(views, store);
console.log('store', store);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/* <h1>App</h1> */}
                <MobxRouter />
            </div>
        </Provider>
    );
}

export default App;
