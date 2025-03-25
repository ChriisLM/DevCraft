export function Hero() {
  return (
    <header className="text-center py-24">
      <h1 className="text-7xl pb-12 font-extrabold bg-gradient-to-r from-blue-800 to-red-500 bg-clip-text text-transparent dark:from-blue-500">
        DevCraft
      </h1>

      <p className="text-2xl  text-color-light-secondary dark:text-color-dark-primary mt-4 font-poppins max-w-2xl mx-auto">
        Construye interfaces increíbles con herramientas diseñadas para{" "}
        <span className="text-blue-700 dark:text-blue-400 font-semibold">
          diseñadores
        </span>{" "}
        y{" "}
        <span className="text-purple-700 dark:text-purple-400 font-semibold">
          desarrolladores
        </span>
        .
      </p>
    </header>
  );
}
