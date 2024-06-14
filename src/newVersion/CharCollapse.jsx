import { motion } from 'framer-motion';

export default function CharCollapse() {
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
            The Character
          </h1>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Requirements
            </div>
            <div className="collapse-content">
              <p>You need to be 18 years old.</p>
              <p>
                You need to be a Year 10 student at Soleira Prestigia, a luxury
                Agrestian academy.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Questions</div>
            <div className="collapse-content">
              <p>How can you afford to go? Who is your family?</p>
              <p>Where were you born? Are you Agrestian?</p>
              <p>
                Soleira Prestigia teaches kids across 10 Years, from 8 to 19
                years old. When did you enroll?
              </p>
              <p>Are you popular at school? What is your social standing?</p>
              <p>
                Do you have any friends at school? You can write 1-2 NPCs that
                are close to you at school.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Mechanics</div>
            <div className="collapse-content">
              <p>We start at Level 5.</p>
              <p>We start with a free Feat.</p>
              <p>
                You start with one custom magic item. The only requirement for
                it is this: It may only have 1 ability, which must create
                something permanent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
