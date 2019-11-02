// router
import Router from '../router';
import { RouterStore } from 'mobx-router';
// store
import SampleDataStore from './sampleDataStore';
import StyleStore from './styleStore';

class RootStore {
    constructor() {
        this.sampleDataStore = new SampleDataStore(this);
        this.styleStore = new StyleStore(this);
        this.router = new RouterStore();
    }
}

export default RootStore;
