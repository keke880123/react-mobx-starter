import { decorate, observable, action, computed, reaction } from 'mobx';
import { getList } from '../../api/listApi';

class SampleDataStore {
    constructor(store) {
        // console.log('self', self);
        this.store = store;
    }

    list = [];

    setList = async () => {
        const data = await getList();
        this.list = data;
        // console.log('data', data);
    };

    get getList() {
        // console.warn('store', this.store);
        return this.list.map((value, index) => {
            // console.log('value', value);
            let strArray = value.download_url.split('/');
            strArray[strArray.length-2] = Math.floor(parseInt(this.store.styleStore.width)/10);
            strArray[strArray.length-1] = Math.floor(parseInt(this.store.styleStore.height)/10);
            value.download_url = strArray.join('/');
            return value;
        });
        // return this.list.slice();
    }
}

decorate(SampleDataStore, {
    list: observable,
    setList: action,
    getList: computed
});

export default SampleDataStore;
