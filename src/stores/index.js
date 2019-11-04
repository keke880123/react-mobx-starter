// router
import Router from '../router';
import { RouterStore } from 'mobx-router';
// store
import SampleDataStore from './sampleDataStore';
import StyleStore from './styleStore';
import TodoStore from './todoStore';

class RootStore {
    constructor() {
        this.sampleDataStore = new SampleDataStore(this);
        this.styleStore = new StyleStore(this);
        this.todoStore = new TodoStore(this);
        this.router = new RouterStore();
    }
}

export default RootStore;
