import { motion } from 'framer-motion';
import l1 from './assets/chars/Layer 1.png';
import l2 from './assets/chars/Layer 2.png';
import l3 from './assets/chars/Layer 3.png';
import l4 from './assets/chars/Layer 4.png';
import l6 from './assets/chars/Layer 6.png';
import l8 from './assets/chars/Layer 8.png';
import l9 from './assets/chars/Layer 9.png';
import l10 from './assets/chars/Layer 10.png';
import l12 from './assets/chars/Layer 12.png';
import l14 from './assets/chars/Layer 14.png';
import l15 from './assets/chars/Layer 15.png';
import l16 from './assets/chars/Layer 16.png';
import l17 from './assets/chars/Layer 17.png';
import l19 from './assets/chars/Layer 19.png';
import l20 from './assets/chars/Layer 20.jpg';
import l21 from './assets/chars/Layer 21.jpg';
import fp from './assets/chars/FLORISTA PARADISO.png';
import q from './assets/chars/download.jpg';

export default function Progress() {
  return (
    <motion.div
      className="gameBlock"
      initial={{ transform: 'translate(-100%)' }} // Initial position off-screen to the left
      animate={{ transform: 'translate(0%)' }} // Animate to opacity 1 and position 0 (sliding in from left)
      exit={{ transform: 'translate(100%)' }} // Animate to opacity 0 and position off-screen to the right (sliding out to right)
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mx-5 my-10">
        <h1 className="text-4xl my-10" style={{ fontFamily: 'LaPointes' }}>
          Progress
        </h1>
        <div className="carousel w-full">
          <div
            id="item1"
            className="carousel-item w-full flex flex-col items-center"
          >
            <div className="overflow-x-auto flex flex-col items-center">
              <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Popularity Mechanic!</h2>
                  <p>
                    Whenever you roll performance, you gain or lose popularity
                    equal to roll result - 10. (pop lvl 1 — bottom, 20 — famous
                    outside of school, like a college athlete, 30 — like the
                    crown prince who happens to be in school).
                  </p>
                  <p>
                    At 50 popularity, your popularity levels up, and you gain a
                    popularity token.
                  </p>
                  <p>
                    If you perform an action that isn&apos;t popular with the
                    local community, the DM can ask you to roll a 1d6, 2d6 or
                    3d6, losing that amount of popularity.
                  </p>
                  <p>
                    If your popularity decreases below 0, you lose a level of
                    popularity (at an overflow level of progress), and you
                    cannot gain any bonuses until you return to your peak level.
                  </p>
                  <p>
                    You can spend a popularity token to (1) gain an inspiration;
                    or (2) increase persuasion, deception or intimidation by 1
                    permanently; (3) popularity invocation: purchase something
                    mundane for free, gain access somewhere restricted, gather
                    rumors.
                  </p>
                </div>
              </div>
              <table className="table popTable">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Pop Lvl</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Tian the Radiant</td>
                    <td className="flex justify-center items-center">
                      <img src={l19} />
                    </td>
                    <td>11</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>3</th>
                    <td>Hurricane</td>
                    <td className="flex justify-center items-center">
                      <img src={l6} />
                    </td>
                    <td>10</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>2</th>
                    <td>Aria Coldsun</td>
                    <td className="flex justify-center items-center">
                      <img src={l2} />
                    </td>
                    <td>9</td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td>Adriana Inarritu</td>
                    <td className="flex justify-center items-center">
                      <img src={l21} />
                    </td>
                    <td>9</td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <th>5</th>
                    <td>Arturo Almeida</td>
                    <td className="flex justify-center items-center">
                      <img src={l3} />
                    </td>
                    <td>9</td>
                  </tr>
                  {/* row 6 */}
                  <tr>
                    <th>6</th>
                    <td>Basilisk</td>
                    <td className="flex justify-center items-center">
                      <img src={l4} />
                    </td>
                    <td>8</td>
                  </tr>
                  {/* row 7 */}
                  <tr>
                    <th>8</th>
                    <td>Devil Spawn Misk Gordan</td>
                    <td className="flex justify-center items-center">
                      <img src={l17} />
                    </td>
                    <td>8</td>
                  </tr>
                  {/* row 8 */}
                  <tr>
                    <th>7</th>
                    <td>The Dragonfly</td>
                    <td className="flex justify-center items-center">
                      <img src={l15} />
                    </td>
                    <td>7</td>
                  </tr>
                  {/* row 9 */}
                  <tr>
                    <th>9</th>
                    <td>Pain</td>
                    <td className="flex justify-center items-center">
                      <img src={l12} />
                    </td>
                    <td>7</td>
                  </tr>
                  {/* row 10 */}
                  <tr>
                    <th>10</th>
                    <td>Sylvia (Ngaio)</td>
                    <td className="flex justify-center items-center">
                      <img src={l14} />
                    </td>
                    <td>6</td>
                  </tr>
                  {/* row 11 */}
                  <tr>
                    <th>11</th>
                    <td>Alvin Aierguard</td>
                    <td className="flex justify-center items-center">
                      <img src={l1} />
                    </td>
                    <td>5</td>
                  </tr>
                  {/* row 12 */}
                  <tr>
                    <th>12</th>
                    <td>Bernardo II Inarritu</td>
                    <td className="flex justify-center items-center">
                      <img src={l20} />
                    </td>
                    <td>5</td>
                  </tr>
                  {/* row 13 */}
                  <tr>
                    <th>13</th>
                    <td>Margosh</td>
                    <td className="flex justify-center items-center">
                      <img src={l10} />
                    </td>
                    <td>2</td>
                  </tr>
                  {/* row 14 */}
                  <tr>
                    <th>14</th>
                    <td>Li-Trog</td>
                    <td className="flex justify-center items-center">
                      <img src={l8} />
                    </td>
                    <td>1</td>
                  </tr>
                  {/* row 15 */}
                  <tr>
                    <th>15</th>
                    <td>Lyra Coldsun</td>
                    <td className="flex justify-center items-center">
                      <img src={l9} />
                    </td>
                    <td>1</td>
                  </tr>
                  {/* row 16 */}
                  <tr>
                    <th>16</th>
                    <td>Oriol Verde</td>
                    <td className="flex justify-center items-center">
                      <img src={l16} />
                    </td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
            </div>
          </div>
          <div
            id="item2"
            className="carousel-item w-full flex flex-col items-center"
          >
            <h2 className="card-title my-5">
              Agrestia&apos;s Next Top Town: TOP 5 TEAMSs
            </h2>
            <table className="table popTable">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Team</th>
                  <th>Members</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Bad Suns</td>
                  <td className="flex flex-col gap-3">
                    <p>Hurricane</p>
                    <p>Basilisk</p>
                    <p>Dragonfly</p>
                    <p>Alvin Aierguard</p>
                  </td>
                  <td>85</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>The GOATS</td>
                  <td className="flex flex-col gap-3">
                    <p>Tian the Radiant</p>
                    <p>Bernardo II</p>
                    <p>The Devil Spawn, Misk Gordan</p>
                    <p>Oriol Verde</p>
                  </td>
                  <td>83</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Hell Froze Over</td>
                  <td className="flex flex-col gap-3">
                    <p>Aria Vinnas</p>
                    <p>Adriana Inarritu</p>
                    <p>Arturo Almeida</p>
                    <p>Pain</p>
                  </td>
                  <td>77</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>4</th>
                  <td>Rosehills</td>
                  <td className="flex flex-col gap-3">
                    <p>Valerio the Silver Fox</p>
                    <p>Goldtongue</p>
                    <p>Miguel Mirage</p>
                    <p>Rui Arroyo</p>
                  </td>
                  <td>74</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>5</th>
                  <td>Public Benefit</td>
                  <td className="flex flex-col gap-3">
                    <p>Sylvia (Ngaio)</p>
                    <p>Morgash</p>
                    <p>Lyra Vinnas</p>
                    <p>Yannis Mortimer</p>
                  </td>
                  <td>71</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
            </div>
          </div>
          <div
            id="item3"
            className="carousel-item w-full flex flex-col items-center gap-5"
          >
            <div className="townCard card w-96 bg-slate-600 shadow-xl">
              <figure>
                <img src={fp} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Florista Paradiso</h2>
                <p>Status: Home of the Great Goat</p>
                <p>Constable: Uncle Paco</p>
                <p>Main faction: Hunters - Liberal Movers & Shakers</p>
                <p>
                  Other faction cells: Temple of the Lovers under construction
                  by the Morningwatch
                </p>
                <p>Emperor: Promoted</p>
              </div>
            </div>
            <div className="card w-96 bg-slate-600 shadow-xl">
              <figure>
                <img src={q} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Next Town</h2>
                <p>Status: ???</p>
                <p>Constable: ???</p>
                <p>Main faction: ???</p>
                <p>Other faction cells: ???</p>
                <p>Emperor: ???</p>
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
