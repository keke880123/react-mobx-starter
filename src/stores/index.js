// router
import Router from '../router';
import { RouterStore } from 'mobx-router';
// store
import SampleDataStore from './sampleDataStore';
import RouteStore from './routeStore';

class RootStore {
    constructor() {
        this.sampleDataStore = new SampleDataStore(this);
        this.routeStore = new RouteStore(this);
        this.router = new RouterStore();
    }
}

export default RootStore;
