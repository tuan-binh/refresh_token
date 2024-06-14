import AccessDeniedPage from '../pages/accessDenied/AccessDeniedPage';
import HomeUser from '../pages/users/HomeUser';
import IndexAdmin from '../pages/admin/IndexAdmin';
import IndexUser from '../pages/users/IndexUser';
import NotFoundPage from '../pages/notFound/NotFoundPage';

const routerConfig = [
  {
    path: '/',
    element: <IndexUser />,
    children: [{ path: '', element: <HomeUser /> }],
  },
  {
    path: '/admin',
    element: <IndexAdmin />,
    children: [],
  },
  { path: '/403', element: <AccessDeniedPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routerConfig;
