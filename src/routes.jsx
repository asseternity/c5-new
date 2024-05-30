import App from './App.jsx';
import GamePage from './GamePage.jsx';
import LorePage from './LorePage.jsx';
import SchoolPage from './SchoolPage.jsx';
import CharPage from './CharPage.jsx';

const myNewRoutes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/landing",
      element: <GamePage />,
    },
    {
      path: "/lore",
      element: <LorePage />,
    },
    {
      path: "/school",
      element: <SchoolPage />,
    },
    {
      path: "/char",
      element: <CharPage />,
    },
  ];

export default myNewRoutes;