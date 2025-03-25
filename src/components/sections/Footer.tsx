import { Github } from "../../utils/Icons";

export function Footer() {
  return (
    <footer className="bg-light-secondary/80 dark:bg-dark-secondary/70 text-white h-auto w-auto py-6">
      <div className="container mx-auto flex items-center justify-around space-x-20">
        <div className="text-color-light-secondary dark:text-color-dark-secondary text-sm flex items-center space-x-2">
          <p className="">
            &copy; {new Date().getFullYear()} Hecho con ❤️ por
          </p>
          <p>
            <strong className="text-blue-700 dark:text-yellow-300"> @ChriisLM</strong>
          </p>
        </div>
        <div className="flex text-color-light-secondary dark:text-color-dark-secondary">
          <a
            href="https://github.com/ChriisLM/DevCraft"
            target="_blank"
            rel="noopener noreferrer"
            className="flex space-x-2 items-center"
          >
            <Github className="size-5" />
            <span className="text-sm hover:text-blue-500 transition-colors duration-300">Github</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
