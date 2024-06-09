import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

export default function Tab({ linksArray }) {
  let sections = [];
  for (let i = 0; i < linksArray.length; i++) {
    sections.push(
      <Link key={v4()} to={linksArray[i].link}>
        <div
          key={v4()}
          className="px-4 border-b-2 dark:border-blue-500 border-yellow-600 hover:border-b-2 hover:border-yellow-600 rounded-b-md text-white"
        >
          {linksArray[i].name}
        </div>
      </Link>
    );
  }

  return (
    <div key={v4()} className="">
      <div
        key={v4()}
        className="sm:w-fit xs:w-[90%] sm:px-4  py-2 rounded-sm flex md:flex-no-wrap xs:flex-wrap md:gap-4 xs:gap-1 justify-center text-white dark:text-black cursor-pointer md:text-lg md:font-semibold xs:text-sm"
      >
        {sections}
      </div>
    </div>
  );
}

// consts linksArray = [
//      {
//          title:
//          link:
//      }
// ]
