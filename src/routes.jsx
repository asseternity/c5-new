import App from './App.jsx';
import GamePage from './GamePage.jsx';
import LorePage from './LorePage.jsx';
import SchoolPage from './SchoolPage.jsx';
import CharPage from './CharPage.jsx';
import Test from './tabMenu/Test.jsx';
import Root from './newVersion/Root.jsx';
import GameCollapse from './newVersion/GameCollapse.jsx';
import LoreCollapse from './newVersion/LoreCollapse.jsx';
import SchoolCollapse from './newVersion/SchoolCollapse.jsx';
import CharCollapse from './newVersion/CharCollapse.jsx';

const myNewRoutes = [
  {
    path: '/c5-new/',
    element: <Root />,
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
  {
    path: '/c5-new/root',
    element: <Root />,
  },
  {
    path: '/c5-new/gc',
    element: <GameCollapse />,
  },
  {
    path: '/c5-new/lc',
    element: <LoreCollapse />,
  },
  {
    path: '/c5-new/sc',
    element: <SchoolCollapse />,
  },
  {
    path: '/c5-new/cc',
    element: <CharCollapse />,
  },
];

export default myNewRoutes;
