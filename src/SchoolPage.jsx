import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import swordUrl from './assets/castle.svg';
import backgroundImage from './assets/zoom-1920x1080-zodiac-opacity.png';
import { motion } from 'framer-motion';
import { v4 } from 'uuid';
import Tab from './tabMenu/Tab';

function SchoolPage() {
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
        <h1>The School</h1>
      </div>
      <div className="sectionContent">
        <div className="sectionImage">
          <img src={swordUrl} alt="Sword" />
        </div>
        <div className="sectionText">
          <ul>
            <h3 key={v4()}>Welcome to Soleira Prestigia!</h3>
            <li key={v4()}>
              Welcome to the illustrious halls of Académie Grandeur, where the
              scions of Agrestia&quot;s most esteemed families cultivate their
              wit, style, and mastery. Here, under the watchful eye of
              Agrestia&quot; most erudite mentors, you will transform into the
              future&quot;s dazzling polymaths, carrying forth the legacy of our
              vibrant republic with unmatched elegance and prowess. Prepare to
              embark on a journey where brilliance meets flamboyance, and
              success is but a stepping stone to greatness!
            </li>
            <h3 key={v4()}>Agrestia&quot;s Last Hope</h3>
            <li key={v4()}>
              Director Phoenix only funds charity projects. This, with
              infighting between the Eagles, has led to a significant economic
              decline of the Wilds of Agrestia.
            </li>
            <li key={v4()}>
              No Eagle could persuade Director Phoenix to fund anything that
              would assist Agrestia&quot;s economy.
            </li>
            <li key={v4()}>
              That is, until the Headmaster of the Academy has persuaded
              Phoenix, the Director of Agrestia to fund a grand academy under
              the pretense that it&quot;s for education.
            </li>
            <li key={v4()}>
              In reality, the Headmaster&quot;s hope is that the Soleira
              Prestigia can create graduates who will bring Agrestia back to its
              full glory.
            </li>
            <li key={v4()}>
              You are in the final year of study at the Soleira Prestigia, which
              means that now it is your job to show the world the true power of
              Agrestia! Can you fulfill the hopes that lie on you?
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

export default SchoolPage;
