import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = 'none';
  }, []);

  const blockRef = useRef(null);

  return (
    <motion.div
      className="landingDiv"
      initial={{ y: -1000 }} // Initial position off-screen to the left
      animate={{ y: 0 }} // Animate to opacity 1 and position 0 (sliding in from left)
      exit={{ y: 1000 }} // Animate to opacity 0 and position off-screen to the right (sliding out to right)
      transition={{ duration: 0.9 }}
    >
      <div className="headerBlock">
        <h1>Welcome to Campaign&nbsp;5</h1>
      </div>
      <div className="headerSubtitle">
        <button
          onClick={() => {
            blockRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
        >
          scroll down
        </button>
      </div>
      <div className="navBlock">
        <div className="navTitle" ref={blockRef}>
          <h1>Choose your destination</h1>
        </div>
        <div className="navButtons">
          <Link to="landing">
            <button>The Game</button>
          </Link>
          <Link to="lore">
            <button>The Lore</button>
          </Link>
          <Link to="school">
            <button>The School</button>
          </Link>
          <Link to="char">
            <button>Your Character</button>
          </Link>
          <div className="newButton">
            <Link>
              <button>Unlock Your Destiny</button>
            </Link>
            <div className="hiddenButtons">
              <Link>
                <button className="hiddenButton1">Popularity</button>
              </Link>
              <Link>
                <button className="hiddenButton2">Team</button>
              </Link>
              <Link>
                <button className="hiddenButton3">Towns</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
