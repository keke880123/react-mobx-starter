// router
import Router from '../router';
import { RouterStore } from 'mobx-router';
// store
import SampleDataStore from './sampleDataStore';

class RootStore {
    constructor() {
        this.sampleDataStore = new SampleDataStore(this);
        this.router = new RouterStore();
    }
}

export default RootStore;
