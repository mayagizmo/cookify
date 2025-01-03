import { Link } from "@tanstack/react-router";
import { BsJournalPlus } from "react-icons/bs";
import { GiFoodTruck } from "react-icons/gi";
import { LuFileHeart } from "react-icons/lu";

export function Header() {
  return (
    <header className="flex justify-between mb-4">
      <Link to="/" className="text-3xl">
        <GiFoodTruck className="text-4xl inline-block mr-2 align-sub" />
        Cookify
      </Link>

      <div className="flex justify-between p-4 text-xl ">
        <Link to="/favorite-recipes" className="mr-2 ">
          <LuFileHeart className="hover:text-primary" />
        </Link>
        <Link to="/add-recipe">
          <BsJournalPlus className="hover:text-primary" />
        </Link>
      </div>
    </header>
  );
}
