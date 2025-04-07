import { useEffect, useState } from "react";
import { DarkIcon, SunIcon } from "../../utils/Icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/DevCraft.svg";

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
    <header className="fixed top-0 w-full bg-light-secondary/80 dark:bg-dark-secondary/90 shadow-md z-10">
      <div className="max-w-7xl py-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center dark:text-white">
          <div className="flex justify-center items-center space-x-4">
            <img
              src={Logo}
              alt=""
              className="size-11 text-color-light-secondary dark:invert"
            />
            <Link
              to="/"
              className="text-2xl font-bold text-color-light-secondary dark:text-color-dark-primary"
            >
              DevCraft
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="flex space-x-6 font-semibold">
              <Link to="/">
                <span className="text-color-light-secondary dark:text-color-dark-primary hover:text-blue-500 transition-colors duration-300">
                  Inicio
                </span>
              </Link>
              <Link to="/about">
                <span className="text-color-light-secondary dark:text-color-dark-primary hover:text-blue-500 transition-colors duration-300">
                  Acerca de
                </span>
              </Link>
            </nav>

            <button
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700"
              onClick={handleChangeTheme}
            >
              {theme === "dark" ? (
                <SunIcon className="h-6 w-6 dark:text-color-dark-primary hover:text-blue-500 transition-colors duration-300" />
              ) : (
                <DarkIcon className="h-6 w-6 text-color-light-secondary hover:text-blue-500 transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
