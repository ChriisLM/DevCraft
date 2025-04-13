import { AddIcon, CopyIcon, TrashIcon } from "../utils/Icons";
import { useShadowsGenerator } from "../lib/hooks/useShadowGenerator";
import { Switch } from "../components/ui/Switch";

export function ShadowGeneratorPage() {
  const {
    shadows,
    backgroundColor,
    elementColor,
    borderRadius,
    cssCode,
    setBackgroundColor,
    setElementColor,
    setBorderRadius,
    updateShadow,
    updateCssCode,
    addShadow,
    removeShadow,
    copyCSS,
    getShadowStyle,
  } = useShadowsGenerator();

  return (
    <div className="top-0 z-[-2] h-fit w-full bg-[#fbfbfe] dark:bg-[#0b0a0f] bg-[radial-gradient(#504c43_1px,#fbfbfe_1px)] dark:bg-[radial-gradient(#5e5b56_1px,#0b0a0f_1px)] bg-[size:20px_20px]">
      <main className="bg-dark-secondary/95 pt-0.5 py-8">
        <div className="px-20 py-6">
          <aside className="bg-white rounded-2xl shadow-md p-6 mb-12 border border-gray-200">
            <header className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Vista previa
              </h2>
            </header>

            <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
              <div
                className="w-full h-64 flex items-center justify-center"
                style={{ backgroundColor }}
              >
                <div
                  className="w-32 h-32 rounded-lg bg-white"
                  style={getShadowStyle()}
                />
              </div>
            </div>
          </aside>
        </div>
        <aside className="bg-dark-secondary mx-20 rounded-2xl py-10 px-16">
          <header className="mb-8">
            <h2 className="text-xl text-color-dark-secondary">Configuración</h2>
          </header>
          <section className="space-y-6 text-color-dark-secondary">
            <div className="space-y-6">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="background-color">Color de fondo</label>
                  <div className="flex space-x-2 mt-2">
                    <div className="relative w-12 h-8 rounded-md overflow-hidden border border-zinc-600 shadow-sm">
                      <input
                        type="color"
                        id="background-color"
                        value={backgroundColor}
                        onChange={(e) => {
                          setBackgroundColor(e.target.value);
                          updateCssCode();
                        }}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div
                        className="w-full h-full"
                        style={{ backgroundColor: backgroundColor }}
                      />
                    </div>
                    <input
                      value={backgroundColor}
                      onChange={(e) => {
                        setBackgroundColor(e.target.value);
                        updateCssCode();
                      }}
                      className="w-full font-mono ml-2 lg:mr-10 py-1 px-4 rounded-md bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="element-color">Color del elemento</label>
                  <div className="flex space-x-2 mt-2">
                    <div className="relative w-12 h-8 rounded-md overflow-hidden border border-zinc-600 shadow-sm">
                      <input
                        type="color"
                        id="background-color"
                        value={elementColor}
                        onChange={(e) => {
                          setElementColor(e.target.value);
                          updateCssCode();
                        }}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div
                        className="w-full h-full"
                        style={{ backgroundColor: elementColor }}
                      />
                    </div>
                    <input
                      value={elementColor}
                      onChange={(e) => {
                        setElementColor(e.target.value);
                        updateCssCode();
                      }}
                      className="w-full font-mono ml-2 lg:mr-10 py-1 px-4 rounded-md bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </section>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="border-radius">
                    Radio de borde: {borderRadius}px
                  </label>
                </div>
                <input
                  id="border-radius"
                  type="range"
                  min={0}
                  max={50}
                  step={1}
                  value={borderRadius}
                  onChange={(e) => {
                    setBorderRadius(Number(e.target.value));
                    updateCssCode();
                  }}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                      borderRadius / 0.5
                    }%, #3f3f46 ${borderRadius / 0.5}%, #3f3f46 100%)`,
                  }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label>Sombras</label>
                  <button
                    onClick={addShadow}
                    disabled={shadows.length >= 5}
                    className="w-fit flex items-center rounded-2xl py-1 px-4 border border-color-dark-secondary cursor-pointer hover:text-color-dark-primary hover:border-color-dark-primary transition-colors duration-100"
                  >
                    <AddIcon className="h-4 w-4 mr-1" /> Añadir
                  </button>
                </div>
                <div className="space-y-6">
                  {shadows.map((shadow, index) => (
                    <div
                      key={index}
                      className="space-y-4 p-4 border rounded-md"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Sombra {index + 1}</h3>
                        <button
                          onClick={() => removeShadow(index)}
                          disabled={shadows.length <= 1}
                          className="cursor-pointer hover:text-color-dark-primary transition-colors duration-100"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label>Desplazamiento X: {shadow.offsetX}px</label>
                          <input
                            type="range"
                            min={-50}
                            max={50}
                            step={1}
                            value={shadow.offsetX}
                            onChange={(e) =>
                              updateShadow(
                                index,
                                "offsetX",
                                Number(e.target.value)
                              )
                            }
                            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                            style={{
                              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                                ((shadow.offsetX + 50) / 100) * 100
                              }%, #3f3f46 ${
                                ((shadow.offsetX + 50) / 100) * 100
                              }%, #3f3f46 100%)`,
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label>Desplazamiento Y: {shadow.offsetY}px</label>
                          <input
                            type="range"
                            min={-50}
                            max={50}
                            step={1}
                            value={shadow.offsetY}
                            onChange={(e) =>
                              updateShadow(
                                index,
                                "offsetY",
                                Number(e.target.value)
                              )
                            }
                            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                            style={{
                              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                                ((shadow.offsetY + 50) / 100) * 100
                              }%, #3f3f46 ${
                                ((shadow.offsetY + 50) / 100) * 100
                              }%, #3f3f46 100%)`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label>Desenfoque: {shadow.blur}px</label>
                          <input
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                            value={shadow.blur}
                            onChange={(e) =>
                              updateShadow(
                                index,
                                "blur",
                                Number(e.target.value)
                              )
                            }
                            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                            style={{
                              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${shadow.blur}%, #3f3f46 ${shadow.blur}%, #3f3f46 100%)`,
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label>Expansión: {shadow.spread}px</label>
                          <input
                            type="range"
                            min={-50}
                            max={50}
                            step={1}
                            value={shadow.spread}
                            onChange={(e) => {
                              const value = Number(e.target.value);
                              console.log("Spread cambiado a:", value);
                              updateShadow(
                                index,
                                "spread",
                                Number(e.target.value)
                              );
                            }}
                            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                            style={{
                              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                                ((shadow.spread + 50) / 100) * 100
                              }%, #3f3f46 ${
                                ((shadow.spread + 50) / 100) * 100
                              }%, #3f3f46 100%)`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor={`shadow-color-${index}`}>Color</label>
                          <input
                            id={`shadow-color-${index}`}
                            value={shadow.color}
                            onChange={(e) =>
                              updateShadow(index, "color", e.target.value)
                            }
                            className="w-full font-mono lg:mr-10 py-1 px-4 rounded-md bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        {/* Aqui el inset */}
                        <div className="flex items-center space-x-2 h-full pt-7 pl-1">
                          <Switch
                            id={`inset-${index}`}
                            checked={shadow.inset}
                            onChange={(value) =>
                              updateShadow(index, "inset", value)
                            }
                          />
                          <label htmlFor={`inset-${index}`}>Inset</label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
