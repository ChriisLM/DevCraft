import { Link } from "react-router-dom";
import { iconsHome as icons } from "../../lib/constants/iconsHome";

type Tool = {
  name: string;
  path: string;
  icon: string;
};

interface CardToolProps {
  index: number;
  tool: Tool;
}

export function CardToolHome({ index, tool }: CardToolProps) {
  return (
    <div
      key={index}
      className={`w-65 h-65 py-6 rounded-xl hover:-translate-y-2 bg-purple-200 dark:bg-dark-secondary text-white shadow-lg border border-color-light-secondary dark:border-color-dark-secondary cursor-pointer transition-all hover:shadow-color-light-secondary hover:dark:shadow-color-light-primary duration-300`}
    >
      <Link
        to={`/tools/${tool.path}`}
        className="flex flex-col items-center justify-center h-full text-xl text-center font-semibold"
      >
        <img
          src={icons[tool.icon]}
          alt={tool.name}
          className="w-28 mb-8 dark:invert-0 invert"
        />
        <h3 className="text-color-light-secondary dark:text-color-dark-secondary">
          {tool.name}
        </h3>
      </Link>
    </div>
  );
}
