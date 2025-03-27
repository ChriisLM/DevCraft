import { Hero } from "../components/sections/Hero";
import { CardToolHome } from "../components/ui/CardToolHome";
import { TitleHome } from "../components/ui/TitleHome";
import { tools } from "../lib/constants/tools";

export function Home() {
  return (
    <>
      <div className="mt-18 bg-color-light-secondary/20 dark:bg-color-dark-secondary/10">
        <Hero />
        <TitleHome />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center  gap-10 p-16 md:px-32">
          {tools.map((tool, index) => (
            <CardToolHome index={index} tool={tool} />
          ))}
        </div>
      </div>
    </>
  );
}
