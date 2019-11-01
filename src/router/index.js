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
        component: <MainLayout page={'list'} />,
        onEnter: (route, params, store) => {}
    }),
    detailPage: new Route({
        path: '/list/:num',
        component: <MainLayout page={'detail'} />,
        onEnter: (route, params, store) => {}
    })
};

export default views;
