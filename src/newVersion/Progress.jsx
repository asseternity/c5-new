import { motion } from 'framer-motion';

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
              <table className="table">
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
                    <td>Quality Control Specialist</td>
                    <td>10</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Aria Coldsun</td>
                    <td>Desktop Support Technician</td>
                    <td>10</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Hurricane</td>
                    <td>Tax Accountant</td>
                    <td>9</td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td>Adriana Inarritu</td>
                    <td>Quality Control Specialist</td>
                    <td>9</td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <th>5</th>
                    <td>Arturo Almeida</td>
                    <td>Quality Control Specialist</td>
                    <td>9</td>
                  </tr>
                  {/* row 6 */}
                  <tr>
                    <th>6</th>
                    <td>Basilisk</td>
                    <td>Quality Control Specialist</td>
                    <td>8</td>
                  </tr>
                  {/* row 7 */}
                  <tr>
                    <th>7</th>
                    <td>The Dragonfly</td>
                    <td>Quality Control Specialist</td>
                    <td>7</td>
                  </tr>
                  {/* row 8 */}
                  <tr>
                    <th>8</th>
                    <td>Devil Spawn Misk Gordan</td>
                    <td>Quality Control Specialist</td>
                    <td>7</td>
                  </tr>
                  {/* row 9 */}
                  <tr>
                    <th>9</th>
                    <td>Pain</td>
                    <td>Quality Control Specialist</td>
                    <td>7</td>
                  </tr>
                  {/* row 10 */}
                  <tr>
                    <th>10</th>
                    <td>Sylvia (Ngaio)</td>
                    <td>Quality Control Specialist</td>
                    <td>6</td>
                  </tr>
                  {/* row 11 */}
                  <tr>
                    <th>11</th>
                    <td>Alvin Aierguard</td>
                    <td>Quality Control Specialist</td>
                    <td>5</td>
                  </tr>
                  {/* row 12 */}
                  <tr>
                    <th>12</th>
                    <td>Bernardo II Inarritu</td>
                    <td>Quality Control Specialist</td>
                    <td>5</td>
                  </tr>
                  {/* row 13 */}
                  <tr>
                    <th>13</th>
                    <td>Margosh</td>
                    <td>Quality Control Specialist</td>
                    <td>2</td>
                  </tr>
                  {/* row 14 */}
                  <tr>
                    <th>14</th>
                    <td>Li-Trog</td>
                    <td>Quality Control Specialist</td>
                    <td>1</td>
                  </tr>
                  {/* row 15 */}
                  <tr>
                    <th>15</th>
                    <td>Lyra Coldsun</td>
                    <td>Quality Control Specialist</td>
                    <td>1</td>
                  </tr>
                  {/* row 16 */}
                  <tr>
                    <th>16</th>
                    <td>Oriol Verde</td>
                    <td>Quality Control Specialist</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            id="item2"
            className="carousel-item w-full flex flex-col items-center"
          >
            <h1>Coming after results of session 1!</h1>
          </div>
          <div
            id="item3"
            className="carousel-item w-full flex flex-col items-center"
          >
            <h1>Coming after results of session 1!</h1>
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
    </motion.div>
  );
}
