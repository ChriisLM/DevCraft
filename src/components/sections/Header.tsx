import { useEffect, useState } from "react";
import { DarkIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";

export function Header() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-10">
      <div className="max-w-7xl py-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center dark:text-white">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            DevCraft
          </Link>

          <div className="flex items-center space-x-6">
            {/* Links de navegación */}
            <nav className="flex space-x-6 dark:text-gray-300">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 dark:hover:text-white"
              >
                Inicio
              </Link>
              <Link
                to="/tools"
                className="text-gray-700 hover:text-gray-900 dark:hover:text-white"
              >
                Herramientas
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 dark:hover:text-white"
              >
                Acerca de
              </Link>
            </nav>

            <button
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700"
              onClick={handleChangeTheme}
            >
              <DarkIcon className="h-6 w-6 text-gray-900 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
