import { BsJournalPlus } from "react-icons/bs";
import { GiFoodTruck } from "react-icons/gi";

export function Header() {
  return (
    <header className="flex justify-between mb-4">
      <a href="/" className="text-3xl">
        <GiFoodTruck className="text-4xl inline-block mr-2 align-sub" />
        Cookify
      </a>

      <a href="#" className="p-4 text-xl hover:text-primary">
        <BsJournalPlus />
      </a>
    </header>
  );
}
