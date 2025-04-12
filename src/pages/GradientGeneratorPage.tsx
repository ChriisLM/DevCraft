import { AddIcon, CopyIcon, TrashIcon } from "../utils/Icons";
import { useGradient } from "../lib/hooks/useGradientGenerator";

export function GradientGeneratorPage() {
  const {
    gradientType,
    setGradientType,
    angle,
    setAngle,
    stops,
    cssCode,
    previewStyle,
    handleStopColorChange,
    handleStopPositionChange,
    addStop,
    removeStop,
    copyCSS,
  } = useGradient();

  return (
    <div className="top-0 z-[-2] h-fit w-full bg-[#fbfbfe] dark:bg-[#0b0a0f] bg-[radial-gradient(#504c43_1px,#fbfbfe_1px)] dark:bg-[radial-gradient(#5e5b56_1px,#0b0a0f_1px)] bg-[size:20px_20px]">
      <main className="bg-dark-secondary/95 pt-0.5 py-8">
        <div className="px-20 py-6">
          <div className="w-full h-80 rounded-2xl" style={previewStyle}></div>
        </div>
        <aside className="bg-dark-secondary mx-20 rounded-2xl py-10 px-16">
          <header className="mb-8">
            <h2 className="text-xl text-color-dark-secondary">Configuración</h2>
          </header>
          <section className="space-y-6 text-color-dark-secondary">
            <div className="flex space-x-20">
              <div>
                <label className="block mb-2">Tipo de degradado</label>
                <div className="inline-flex overflow-hidden border border-zinc-700 rounded-md bg-zinc-800">
                  {["linear", "radial", "conic"].map((type, index, arr) => {
                    const isFirst = index === 0;
                    const isLast = index === arr.length - 1;
                    const isActive = gradientType === type;

                    return (
                      <button
                        key={type}
                        onClick={() =>
                          setGradientType(type as "linear" | "radial" | "conic")
                        }
                        className={`px-4 py-2 transition font-medium border-r border-zinc-700 last:border-r-0 ${
                          isFirst ? "rounded-l-md" : ""
                        } ${isLast ? "rounded-r-md" : ""} ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {(gradientType === "linear" || gradientType === "conic") && (
                <div className="space-y-2 w-full">
                  <div className="flex justify-between">
                    <label htmlFor="angle">Ángulo: {angle}°</label>
                  </div>
                  <input
                    id="angle"
                    type="range"
                    min={0}
                    max={360}
                    step={1}
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                        angle / 3.6
                      }%, #3f3f46 ${angle / 3.6}%, #3f3f46 100%)`,
                    }}
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label>Puntos de color</label>
                <button
                  onClick={addStop}
                  disabled={stops.length >= 10}
                  className="flex items-center hover:text-color-dark-primary cursor-pointer"
                >
                  <AddIcon className="h-5 w-5 mr-1" />
                  Añadir
                </button>
              </div>

              <div className="space-y-4">
                {stops.map((stop, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="relative w-12 h-8 rounded-md overflow-hidden border border-zinc-600 shadow-sm">
                      <input
                        type="color"
                        value={stop.color}
                        onChange={(e) =>
                          handleStopColorChange(index, e.target.value)
                        }
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div
                        className="w-full h-full"
                        style={{ backgroundColor: stop.color }}
                      />
                    </div>
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex-1">
                        <input
                          type="range"
                          min={0}
                          max={100}
                          step={1}
                          value={stop.position}
                          onChange={(e) =>
                            handleStopPositionChange(
                              index,
                              Number(e.target.value)
                            )
                          }
                          className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                          style={{
                            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${stop.position}%, #3f3f46 ${stop.position}%, #3f3f46 100%)`,
                          }}
                        />
                      </div>
                      <div className="w-16">
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={stop.position}
                          onChange={(e) =>
                            handleStopPositionChange(
                              index,
                              Number.parseInt(e.target.value) || 0
                            )
                          }
                          className="w-full p-1 text-center rounded-md bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => removeStop(index)}
                      disabled={stops.length <= 2}
                      className="hover:text-color-dark-primary cursor-pointer"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </aside>

        <div className="h-full bg-dark-secondary mx-20 rounded-2xl py-5 px-16 mt-8">
          <header className="mb-4">
            <h2 className="text-lg font-semibold text-color-dark-secondary">
              Código CSS
            </h2>
            <p className="text-sm text-light-secondary">
              Copia el código generado
            </p>
          </header>

          <section>
            <div className="relative rounded-lg border border-zinc-700 bg-zinc-900 overflow-hidden">
              <pre className="p-4 text-sm text-zinc-100 overflow-x-auto">
                <code>{cssCode}</code>
              </pre>
              <button
                onClick={copyCSS}
                className="absolute top-2 right-2 p-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition cursor-pointer"
                title="Copiar código"
              >
                <CopyIcon className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
