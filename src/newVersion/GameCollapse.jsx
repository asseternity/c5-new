import { motion } from 'framer-motion';

export default function GameCollapse() {
  return (
    <motion.div
      className="gameBlock"
      initial={{ transform: 'translate(-100%)' }} // Initial position off-screen to the left
      animate={{ transform: 'translate(0%)' }} // Animate to opacity 1 and position 0 (sliding in from left)
      exit={{ transform: 'translate(100%)' }} // Animate to opacity 0 and position off-screen to the right (sliding out to right)
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex flex-col min-h-screen"
        style={{ fontFamily: 'Playfair' }}
      >
        <div className="flex flex-col items-center mx-5 my-10">
          <h1 className="text-4xl my-10" style={{ fontFamily: 'LaPointes' }}>
            The Game
          </h1>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is this game?
            </div>
            <div className="collapse-content">
              <p>
                This is a game set in the Wilds of Agrestia, a stylish
                mercantile republic in my continent of Leordis. When we play,
                English = Agrestian language, while Russian = Duape language
                (Duape being the most powerful nation on Leordis).
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What is the fun of this game?
            </div>
            <div className="collapse-content">
              <p>
                A magic academy in Agrestia! You are last year students - now 18
                years old and eligible to be sent on missions! Navigate magic
                academy drama, wow your teachers, make connections and promote
                the prestige of the Soleira Prestigia!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">On safety</div>
            <div className="collapse-content">
              <p>
                Safety is the most important thing. No homophobia, misogyny,
                racism - even as a joke.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              No-no topics
            </div>
            <div className="collapse-content">
              <p>
                Please let me know if there are any topics that you do not wish
                to be portrayed in the game. For example, are you comfortable
                with other characters / players flirting or romancing your
                character?
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
