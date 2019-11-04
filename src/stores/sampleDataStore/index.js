import { decorate, observable, action, computed, reaction } from 'mobx';
import { getList, getDetail } from '../../api/listApi';

class SampleDataStore {
    constructor(store) {
        this.store = store;
    }

    list = [];

    setList = async () => {
        const data = await getList();
        this.list = data;
    };
    get getMyList() {
        console.log('computed');
        return this.list.map(value => {
            let strArray = value.download_url.split('/');
            strArray[strArray.length - 2] = Math.floor(this.store.styleStore.width / 3);
            strArray[strArray.length - 1] = Math.floor(this.store.styleStore.height / 10);
            const newValue = { ...value, download_url: strArray.join('/') };
            return newValue;
        });
    }
}

decorate(SampleDataStore, {
    list: observable,
    setList: action,
    getMyList: computed
});

export default SampleDataStore;
