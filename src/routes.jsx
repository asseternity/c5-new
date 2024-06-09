import App from './App.jsx';
import GamePage from './GamePage.jsx';
import LorePage from './LorePage.jsx';
import SchoolPage from './SchoolPage.jsx';
import CharPage from './CharPage.jsx';
import Test from './tabMenu/Test.jsx';

const myNewRoutes = [
  {
    path: '/c5-new/',
    element: <App />,
  },
  {
    path: '/c5-new/landing',
    element: <GamePage />,
  },
  {
    path: '/c5-new/lore',
    element: <LorePage />,
  },
  {
    path: '/c5-new/school',
    element: <SchoolPage />,
  },
  {
    path: '/c5-new/char',
    element: <CharPage />,
  },
  {
    path: '/c5-new/test',
    element: <Test />,
  },
];

export default myNewRoutes;
