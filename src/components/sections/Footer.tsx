import { Github } from "../../assets/Icons";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white h-auto w-auto py-6 mt-10">
      <div className="container mx-auto flex items-center justify-center space-x-10">
        <div className="text-sm flex items-center space-x-2">
          <p className="">
            &copy; {new Date().getFullYear()} Hecho con ❤️ por
          </p>
          <p>
            <strong className=" text-yellow-300"> @ChriisLM</strong>
          </p>
        </div>
        <div className="flex">
          <a
            href="https://github.com/ChriisLM/DevCraft"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
