import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import { Home } from '../pages/home';
import { CityDetail } from '../pages/cityDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/city/:id',
        element: <CityDetail/>
    }
])

export default router;