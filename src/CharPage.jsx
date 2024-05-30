import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import swordUrl from './assets/student.svg';
import backgroundImage from './assets/zoom-1920x1080-zodiac-opacity.png';
import { motion } from 'framer-motion';

function CharPage() {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${backgroundImage})`;
      }, []);

    return (
        <motion.div 
            className="gameBlock"
            initial={{ y: -1000 }} // Initial position off-screen to the left
            animate={{ y: 0 }} // Animate to opacity 1 and position 0 (sliding in from left)
            exit={{ y: 1000 }} // Animate to opacity 0 and position off-screen to the right (sliding out to right)
            transition={{ duration: 0.9 }}
        >
            <div className="sectionHead">
                <h1>Your Character</h1>
            </div>
            <div className="sectionContent">
                <div className="sectionImage">
                    <img src={swordUrl} alt="Sword" />
                </div>
                <div className="sectionText">
                   <ul>
                    <li>You need to be 18 years old.</li>
                    <li>You need to be a Year 10 student at Soleira Prestigia, a luxury Agrestian academy.</li>
                    <li>How can you afford to go? Who is your family?</li>
                    <li>Where were you born? Are you Agrestian?</li>
                    <li>Soleira Prestigia teaches kids across 10 Years, from 8 to 19 years old. When did you enroll?</li>
                    <li>Are you popular at school? What is your social standing?</li>
                    <li>Do you have any friends at school? You can write 1-2 NPCs that are close to you at school.</li>
                    <h3>Mechanics</h3>
                    <li>We start at Level 5.</li>
                    <li>You can do point buy, or we can roll for stats (4d6 drop lowest, total less than 70 is a reroll of all). Message me when you want to roll your stats.</li>
                    <li>We start with a free Feat.</li>
                    <li>You start with one custom magic item. The only requirement for it is this: It may only have 1 ability, which must create something permanent.</li>
                    <h3>Deadline</h3>
                    <li>Please give me your characters: their concept, personality, art and theme song, as well as a complete charsheet by <span className="highlight">5 June</span>.</li>
                    <li>If you have any questions about Agrestia, where you could be from or if you need help with mechanics - please message me.</li>
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

export default CharPage;