import MainPage from './pages/MainPage';
import Contacts from './pages/Contacts';
import Selected from './pages/Selected';
import SelectionPage from './pages/SelectionPage';

import {MAIN_PAGE_ROUTE, CONTACTS_ROUTE, SELECTED_ROUTE, SELECT_ROUTE} from './utils/consts';

export const routes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: SELECTED_ROUTE,
        Component: Selected
    },
    {
        path: SELECT_ROUTE,
        Component: SelectionPage
    }
]