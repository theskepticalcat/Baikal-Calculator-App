import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { routes } from '../routes';
import { MAIN_PAGE_ROUTE } from './../utils/consts';

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(({path, Component}) =>      //отрисовываем компоненты в зависимости от роута
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={ MAIN_PAGE_ROUTE }/>
        </Switch>
    )
}

export default AppRouter;