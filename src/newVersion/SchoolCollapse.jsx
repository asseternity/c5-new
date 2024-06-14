import { motion } from 'framer-motion';

export default function SchoolCollapse() {
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
            The School
          </h1>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Welcome to Soleira Prestigia!
            </div>
            <div className="collapse-content">
              <p>
                Welcome to the illustrious halls of Académie Grandeur, where the
                scions of Agrestia&apos;s most esteemed families cultivate their
                wit, style, and mastery. Here, under the watchful eye of
                Agrestia&apos; most erudite mentors, you will transform into the
                future&apos;s dazzling polymaths, carrying forth the legacy of
                our vibrant republic with unmatched elegance and prowess.
                Prepare to embark on a journey where brilliance meets
                flamboyance, and success is but a stepping stone to greatness!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Agrestia&apos;s Last Hope
            </div>
            <div className="collapse-content">
              <p>
                Director Phoenix only funds charity projects. This, with
                infighting between the Eagles, has led to a significant economic
                decline of the Wilds of Agrestia.
              </p>
              <p>
                No Eagle could persuade Director Phoenix to fund anything that
                would assist Agrestia&apos;s economy.
              </p>
              <p>
                That is, until the Headmaster of the Academy has persuaded
                Phoenix, the Director of Agrestia to fund a grand academy under
                the pretense that it&apos;s for education.
              </p>
              <p>
                In reality, the Headmaster&apos;s hope is that the Soleira
                Prestigia can create graduates who will bring Agrestia back to
                its full glory.
              </p>
              <p>
                You are in the final year of study at the Soleira Prestigia,
                which means that now it is your job to show the world the true
                power of Agrestia! Can you fulfill the hopes that lie on you?
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
