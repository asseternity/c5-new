import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Popularity from './modalContents/Popularity';
import Teams from './modalContents/Teams';
import Towns from './modalContents/Towns';
import './index.css';

function Panel({ children, updateActiveModalIndex }) {
  return (
    <div className="modal">
      <button onClick={() => updateActiveModalIndex(0)}>x</button>
      {children}
    </div>
  );
}

function Modal({ activeModalIndex, updateActiveModalIndex }) {
  const popularity = <Popularity />;
  const towns = <Towns />;
  const teams = <Teams />;

  let hiddenStyle;

  if (activeModalIndex == 0) {
    hiddenStyle = {
      display: 'none',
    };
  }

  return (
    <div className="modalContainer" style={hiddenStyle}>
      {activeModalIndex == 0 ? null : activeModalIndex == 1 ? (
        <Panel updateActiveModalIndex={updateActiveModalIndex}>
          {popularity}
        </Panel>
      ) : activeModalIndex == 2 ? (
        <Panel updateActiveModalIndex={updateActiveModalIndex}>{towns}</Panel>
      ) : activeModalIndex == 3 ? (
        <Panel updateActiveModalIndex={updateActiveModalIndex}>{teams}</Panel>
      ) : null}
    </div>
  );
}

function App() {
  const [button1style, setButton1] = useState();
  const [button2style, setButton2] = useState();
  const [button3style, setButton3] = useState();
  const [button0style, setButton0] = useState();
  const [activeModalIndex, setActiveModalIndex] = useState(0);

  function handleButtons() {
    let b1_newStyle = {
      transition: 'transform 0.5s ease-in 0.2s, opacity 0.3s ease-in 0s',
      transform: 'translateY(0%) translateX(0%)',
      visibility: 'visible',
      opacity: 1,
      borderColor: '#646cff',
      backgroundColor: '#213547',
      fontFamily: 'LaPointes',
    };
    setButton1(b1_newStyle);
    let b2_newStyle = {
      transition: 'transform 0.5s ease-in 0.2s, opacity 0.3s ease-in 0s',
      transform: 'translateY(0%) translateX(0%)',
      visibility: 'visible',
      opacity: 1,
      borderColor: '#646cff',
      backgroundColor: '#213547',
      fontFamily: 'LaPointes',
    };
    setButton2(b2_newStyle);
    let b3_newStyle = {
      transition: 'transform 0.5s ease-in 0.2s, opacity 0.3s ease-in 0s',
      transform: 'translateY(0%) translateX(0%)',
      visibility: 'visible',
      opacity: 1,
      borderColor: '#646cff',
      backgroundColor: '#213547',
      fontFamily: 'LaPointes',
    };
    setButton3(b3_newStyle);
    setButton0({ opacity: 0 });
  }

  function handleModalChange(index) {
    setActiveModalIndex(index);
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
              <button
                className="unlockButton"
                onClick={handleButtons}
                style={button0style}
              >
                Unlock Your Destiny
              </button>
            </Link>
            <div className="hiddenButtons">
              <button
                className="hiddenButton1"
                style={button1style}
                onClick={() => handleModalChange(1)}
              >
                Popularity
              </button>
              <button
                className="hiddenButton2"
                style={button2style}
                onClick={() => handleModalChange(3)}
              >
                Team
              </button>
              <button
                className="hiddenButton3"
                style={button3style}
                onClick={() => handleModalChange(2)}
              >
                Towns
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        activeModalIndex={activeModalIndex}
        updateActiveModalIndex={setActiveModalIndex}
      />
      ;
    </motion.div>
  );
}

export default App;
