import { decorate, observable, action, computed, reaction } from 'mobx';

class SampleDataStore {
    constructor(self) {
        // console.log('self', self);
    }

    list = [];
}

decorate(SampleDataStore, {
    list: observable
});

export default SampleDataStore;
