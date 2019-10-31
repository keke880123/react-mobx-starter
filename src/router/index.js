import React from 'react';
import { Route } from 'mobx-router';
// component
import MainLayout from '../layouts/mainLayout';

const views = {
    initPage: new Route({
        path: '/',
        component: <MainLayout />,
        onEnter: (route, params, store) => {
            store.router.goTo(views.listPage, {}, store);
        }
    }),
    listPage: new Route({
        path: '/list',
        component: <MainLayout />,
        onEnter: (route, params, store) => {
            // 바람직한 방법이 아님
            // store.router.params = { ...store.router.params, page: 'list' };
            store.routeStore.setPage('list');
        }
    })
};

export default views;
