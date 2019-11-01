import service from '../utils/request';

export function getList(params = {}) {
    return service({
        url: 'https://picsum.photos/v2/list',
        method: 'get',
        params: params
    });
}
