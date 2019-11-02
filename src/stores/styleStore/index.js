import { decorate, observable, action, computed, reaction } from 'mobx';

class StyleStore {
    constructor(self) {
        // console.log('self', self);
        this.self = self;
    }

    width = 0;
    height = 0;

    setSize = async (width, height) => {
        this.width = width;
        this.height = height;
        console.log('size', this.width, this.height);
    };
}

decorate(StyleStore, {
    width: observable,
    height: observable,
    setSize: action
});

export default StyleStore;
