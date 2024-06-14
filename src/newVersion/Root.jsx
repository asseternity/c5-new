import SchoolCollapse from './SchoolCollapse';
import LoreCollapse from './LoreCollapse';
import GameCollapse from './GameCollapse';
import CharCollapse from './CharCollapse';
import Progress from './Progress';
import student from './assets/emojies-emoji-smiley-svgrepo-com.svg';
import castle from './assets/nerd-emoji-smiley-svgrepo-com.svg';
import space from './assets/angel-emoji-smiley-svgrepo-com.svg';
import sword from './assets/viking-emoji-smiley-svgrepo-com.svg';
import progress from './assets/movie-emoji-smiley-svgrepo-com.svg';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Root() {
  const [currentTab, setCurrentTab] = useState('gc');

  function handleButtonClick(tab) {
    switch (tab) {
      case 'gc':
        setCurrentTab('gc');
        break;
      case 'cc':
        setCurrentTab('cc');
        break;
      case 'lc':
        setCurrentTab('lc');
        break;
      case 'sc':
        setCurrentTab('sc');
        break;
      case 'pc':
        setCurrentTab('pc');
        break;
    }
  }

  let content;
  switch (currentTab) {
    case 'gc':
      content = <GameCollapse />;
      break;
    case 'lc':
      content = <LoreCollapse />;
      break;
    case 'cc':
      content = <CharCollapse />;
      break;
    case 'sc':
      content = <SchoolCollapse />;
      break;
    case 'pc':
      content = <Progress />;
      break;
  }

  return (
    <div>
      <div>
        <div
          className="navbar flex flex-row justify-center items-center"
          style={{ fontFamily: 'Playfair' }}
        >
          <div className="flex-none">
            <div className="flex flex-col justify-center items-center px-1">
              <button
                className="btn btn-square btn-ghost"
                onClick={() => handleButtonClick('gc')}
              >
                <img src={sword} />
              </button>
              Game
            </div>
            <div className="flex flex-col justify-center items-center px-1">
              <button
                className="btn btn-square btn-ghost"
                onClick={() => handleButtonClick('lc')}
              >
                <img src={space} />
              </button>
              Lore
            </div>
            <div className="flex flex-col justify-center items-center px-1">
              <button
                className="btn btn-square btn-ghost"
                onClick={() => handleButtonClick('sc')}
              >
                <img src={castle} />
              </button>
              School
            </div>
            <div className="flex flex-col justify-center items-center px-1">
              <button
                className="btn btn-square btn-ghost"
                onClick={() => handleButtonClick('cc')}
              >
                <img src={student} />
              </button>
              Char
            </div>
            <div className="flex flex-col justify-center items-center px-1 progressButton">
              <button
                className="btn btn-square btn-ghost"
                onClick={() => handleButtonClick('pc')}
              >
                <img src={progress} />
              </button>
              Progress
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab}
          initial={{ opacity: 0, transform: 'translate(-100%)' }}
          animate={{ opacity: 1, transform: 'translate(0%)' }}
          exit={{ opacity: 0, transform: 'translate(100%)' }}
          transition={{ duration: 0.3 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
