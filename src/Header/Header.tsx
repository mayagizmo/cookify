import { Link } from "@tanstack/react-router";
import { BsJournalPlus } from "react-icons/bs";
import { GiFoodTruck } from "react-icons/gi";

export function Header() {
  return (
    <header className="flex justify-between mb-4">
      <Link to="/" className="text-3xl">
        <GiFoodTruck className="text-4xl inline-block mr-2 align-sub" />
        Cookify
      </Link>

      <Link to="/add-recipe" className="p-4 text-xl hover:text-primary">
        <BsJournalPlus />
      </Link>
    </header>
  );
}
