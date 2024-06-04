import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  let b1_oldStyle = {
    transition: 'transform 0.5s ease-out 0.2s',
    transform: 'translateY(-250%) translateX(100%)',
  };
  let b2_oldStyle = {
    transition: 'transform 0.5s ease-out 0.2s',
    transform: 'translateY(-250%)',
  };
  let b3_oldStyle = {
    transition: 'transform 0.5s ease-out 0.2s',
    transform: 'translateY(-250%) translateX(-100%)',
  };

  const [button1style, setButton1] = useState(b1_oldStyle);
  const [button2style, setButton2] = useState(b2_oldStyle);
  const [button3style, setButton3] = useState(b3_oldStyle);

  function handleButtons() {
    let b1_newStyle = {
      transition: 'transform 0.5s ease-out 0.2s',
      transform: 'translateY(0%) translateX(0%)',
      color: 'red',
    };
    setButton1(b1_newStyle);
    let b2_newStyle = {
      transition: 'transform 0.5s ease-out 0.2s',
      transform: 'translateY(0%) translateX(0%)',
      color: 'red',
    };
    setButton2(b2_newStyle);
    let b3_newStyle = {
      transition: 'transform 0.5s ease-out 0.2s',
      transform: 'translateY(0%) translateX(0%)',
      color: 'red',
    };
    setButton3(b3_newStyle);
  }

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
              <button className="unlockButton" onClick={handleButtons}>
                Unlock Your Destiny
              </button>
            </Link>
            <div className="hiddenButtons">
              <Link>
                <button className="hiddenButton1" style={button1style}>
                  Popularity
                </button>
              </Link>
              <Link>
                <button className="hiddenButton2" style={button2style}>
                  Team
                </button>
              </Link>
              <Link>
                <button className="hiddenButton3" style={button3style}>
                  Towns
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
