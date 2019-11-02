import { decorate, observable, action, computed, reaction } from 'mobx';
import { getList, getDetail } from '../../api/listApi';

class SampleDataStore {
    constructor(store) {
        this.store = store;
    }

    list = [];
    detail = '';

    setList = async () => {
        const data = await getList();
        this.list = data;
        // console.log('data', data);
    };
}

decorate(SampleDataStore, {
    list: observable,
    setList: action,
    detail: observable,
    setDetail: action
});

export default SampleDataStore;
