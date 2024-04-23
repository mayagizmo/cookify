import { FaRegCopyright } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="flex justify-between pt-4 mt-4 border-t border-slate-700">
      <span>
        <FaRegCopyright className="inline-block" /> Made with ❤ in Berliiiiiin.
      </span>
      <span>2024</span>
    </footer>
  );
}
