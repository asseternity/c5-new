import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import swordUrl from './assets/sword.svg';
import backgroundImage from './assets/1920x1080-zodiac-2-opacity.png';
import { motion } from 'framer-motion';
import { v4 } from 'uuid';
import Tab from './tabMenu/Tab';

function GamePage() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }, []);

  const links = [
    { name: 'Game', link: '/c5-new/landing' },
    { name: 'Lore', link: '/c5-new/lore' },
    { name: 'School', link: '/c5-new/school' },
    { name: 'Character', link: '/c5-new/char' },
    { name: 'Popularity', link: '' },
    { name: 'Teams', link: '' },
    { name: 'Towns', link: '' },
  ];

  return (
    <motion.div
      className="gameBlock"
      initial={{ y: -1000 }} // Initial position off-screen to the left
      animate={{ y: 0 }} // Animate to opacity 1 and position 0 (sliding in from left)
      exit={{ y: 1000 }} // Animate to opacity 0 and position off-screen to the right (sliding out to right)
      transition={{ duration: 0.9 }}
    >
      <div className="my-20 flex justify-center items-center">
        <Tab linksArray={links} />
      </div>
      <div className="sectionHead my-10">
        <h1>The Game</h1>
      </div>
      <div className="sectionContent">
        <div className="sectionImage">
          <img src={swordUrl} alt="Sword" />
        </div>
        <div className="sectionText">
          <ul>
            <h3 key={v4()}>What is this game?</h3>
            <li key={v4()}>
              This is a game set in the Wilds of Agrestia, a stylish mercantile
              republic in my continent of Leordis. When we play, English =
              Agrestian language, while Russian = Duape language (Duape being
              the most powerful nation on Leordis).
            </li>
            <h3 key={v4()}>What is the fun of this game?</h3>
            <li key={v4()}>
              A magic academy in Agrestia! You are last year students - now 18
              years old and eligible to be sent on missions! Navigate magic
              academy drama, wow your teachers, make connections and promote the
              prestige of the Soleira Prestigia!
            </li>
            <h3 key={v4()}>On safety</h3>
            <li key={v4()}>
              Safety is the most important thing. No homophobia, misogyny,
              racism - even as a joke.
            </li>
            <h3 key={v4()}>No-no topics</h3>
            <li key={v4()}>
              Please let me know if there are any topics that you do not wish to
              be portrayed in the game. For example, are you comfortable with
              other characters / players flirting or romancing your character?
            </li>
          </ul>
          <div className="returnButton">
            <Link to="/c5-new/">
              <button>Return</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default GamePage;
