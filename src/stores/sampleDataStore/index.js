import { decorate, observable, action, computed, reaction } from 'mobx';
import { getList } from '../../api/listApi';

class SampleDataStore {
    constructor(self) {
        // console.log('self', self);
    }

    list = [];

    setList = async () => {
        const data = await getList();
        this.list = data;
        // console.log('data', data);
    };

    get getList() {
        return this.list.slice();
    }
}

decorate(SampleDataStore, {
    list: observable,
    setList: action,
    getList: computed
});

export default SampleDataStore;
