import {
  HomeIcon,
  TruckIcon,
  CodeBracketIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="bg-[#070101] py-6 sticky top-0 sm:px-10 px-2 flex justify-between text-gray-200 items-center">
      <div>
        <h1 className="sm:hidden bg-yellow-100 px-2 text-black rounded-md">
          <span className="bg-red-500">S</span>
          <span className="bg-yellow-500">P</span>
        </h1>
        <h1 className="hidden sm:flex font-bold text-blue-400">
          SILENTPROGRAMMER
        </h1>
      </div>
      <div className="flex text-xs space-x-4 font-medium cursor-pointer">
        <p className="menuItems">HOME</p>

        <p className="menuItems">SERVICE</p>

        <p className="menuItems">SOURCECODE</p>

        <p className="menuItems">TECHARTICLE</p>

        <p className="menuItems">ABOUT</p>

        <p className="menuItems">CONTACTS</p>
      </div>
    </header>
  );
};

export default Header;
