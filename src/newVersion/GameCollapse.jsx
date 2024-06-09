import student from './assets/student.svg';
import castle from './assets/castle.svg';
import space from './assets/space.svg';
import sword from './assets/sword.svg';
import { Link } from 'react-router-dom';

export default function GameCollapse() {
  return (
    <div>
      <div>
        <div className="navbar flex flex-row justify-center items-center bg-base-content text-secondary">
          <div className="flex-none">
            <Link to="/c5-new/gc">
              <div className="flex flex-col justify-center items-center px-3">
                <button className="btn btn-square btn-primary">
                  <img src={sword} />
                </button>
                Game
              </div>
            </Link>
            <Link to="/c5-new/lc">
              <div className="flex flex-col justify-center items-center px-3">
                <button className="btn btn-square btn-primary">
                  <img src={space} />
                </button>
                Lore
              </div>
            </Link>
            <div className="flex flex-col justify-center items-center px-3">
              <button className="btn btn-square btn-primary">
                <img src={castle} />
              </button>
              School
            </div>
            <div className="flex flex-col justify-center items-center px-3">
              <button className="btn btn-square btn-primary">
                <img src={student} />
              </button>
              Character
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
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
    </div>
  );
}
