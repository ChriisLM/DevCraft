import { useState } from "react";
import { MenuIcon } from "../../utils/Icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import { tools } from "../../lib/constants/tools";
import { iconsHome as icons } from "../../lib/constants/iconsHome";
import Logo from "../../assets/svg/DevCraft.svg";

export function SidebarTools() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  return (
    <>
      <button
        onClick={handleToggleMenu}
        className={`fixed top-4 left-4 z-40 md:hidden bg-transparent rounded-md p-1 ${
          isOpen ? "hidden" : "fixed"
        }`}
      >
        <MenuIcon className="h-5 w-5 dark:text-gray-200" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={handleToggleMenu}
        />
      )}

      <aside
        className={`
        fixed md:static flex-col justify-between bg-dark-primary text-white 
        shadow-md w-56 h-screen z-30 not-first:transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        md:flex
      `}
      >
        <section>
          <div className="flex justify-center items-center py-4 space-x-4 mb-2">
            <img src={Logo} alt="DevCraft" className="w-10 h-10 invert" />
            <NavLink
              to="/"
              className="text-2xl font-bold text-color-light-secondary dark:text-color-dark-primary"
            >
              DevCraft
            </NavLink>
          </div>
          <nav>
            <ul>
              {tools.map((tool) => (
                <Link
                  key={tool.path}
                  to={`/tools/${tool.path}`}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors ${
                    location.pathname === `/tools/${tool.path}`
                      ? "bg-dark-secondary/90 text-white"
                      : "text-gray-700 hover:bg-gray-800"
                  }`}
                >
                  <img
                    src={icons[tool.icon]}
                    alt={tool.name}
                    className="w-8 invert"
                  />
                  {tool.name}
                </Link>
              ))}
            </ul>
          </nav>
        </section>
      </aside>
    </>
  );
}
