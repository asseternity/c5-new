import student from './assets/student.svg';
import castle from './assets/castle.svg';
import space from './assets/space.svg';
import sword from './assets/sword.svg';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <div className="navbar flex flex-row justify-center items-center bg-primary text-secondary">
        <div className="flex-none">
          <div className="flex flex-col justify-center items-center px-3">
            <button className="btn btn-square btn-primary">
              <img src={sword} />
            </button>
            Game
          </div>
          <div className="flex flex-col justify-center items-center px-3">
            <button className="btn btn-square btn-primary">
              <img src={space} />
            </button>
            Lore
          </div>
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
  );
}
