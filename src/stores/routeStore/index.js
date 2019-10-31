import { decorate, observable, action, computed, reaction } from 'mobx';

class RouteStore {
    constructor(self) {
        // console.log('self', self);
    }

    page = '';

    setPage = page => {
        this.page = page;
    };
}

decorate(RouteStore, {
    page: observable,
    setPage: action
});

export default RouteStore;
