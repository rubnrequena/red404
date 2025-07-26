import { Link } from "react-router-dom";
import {
  HomeIcon,
  MessageCircleDashedIcon,
  CompassIcon,
  SearchIcon,
} from "lucide-react";
function NavBar() {
  return (
    <>
      <div className="w-52 flex flex-col items-center pl-4 pr-9 py-6 border-r-2 border-r-stone-700">
        <header className="mb-9">
          <span className="font-bold text-xl text-red-300">red404</span>
        </header>
        <nav className="flex flex-col gap-9">
          <Link className="home-link flex gap-3 items-center" to="/home">
            <HomeIcon size={32} />{" "}
            <span className="font-bold text-xl">Home</span>
          </Link>
          <Link className="messages-link flex gap-3 items-center" to="/search">
            <SearchIcon size={32} />
            <span className="font-bold text-xl">Search</span>
          </Link>
          <Link
            className="messages-link flex gap-3 items-center"
            to="/messages"
          >
            <CompassIcon size={32} />
            <span className="font-bold text-xl">Explore</span>
          </Link>
          <Link className="messages-link flex gap-3 items-center" to="/explore">
            <MessageCircleDashedIcon size={32} />
            <span className="font-bold text-xl">Messages</span>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
