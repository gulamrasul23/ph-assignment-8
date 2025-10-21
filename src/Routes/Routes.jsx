import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import RootLayout from '../Layouts/RootLayout'
import ErrorPage from '../Pages/ErrorPage'
import Installation from '../Pages/Installation'
import AppsDetails from '../Pages/AppsDetails'

const router = createBrowserRouter([
  {
    path : '/',
    element:<RootLayout></RootLayout>,
    
    children:[
        {
            index: true,
            element:<Home/>,
        },
        {
            path : '/home',
            element:<Home/>,
            
        },
        {
            path : '/apps',
            element:<Apps/>,
        },
        {
            path : '/installation',
            element:<Installation/>,
        },
        {
            path: '/app/:id',
            element: <AppsDetails/>,
            
        },
        {
            path: "*",
            element: <ErrorPage/>
        },
    ]
  },

  
])

export default router