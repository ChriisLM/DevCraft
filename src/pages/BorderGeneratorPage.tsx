import { useBorder } from "../lib/hooks/useBorderGenerator";
import { CopyIcon } from "../utils/Icons";

export default function BorderGenerator() {
  const {
    borderWidth,
    setBorderWidth,
    borderStyle,
    setBorderStyle,
    borderColor,
    setBorderColor,
    borderRadius,
    linkCorners,
    setLinkCorners,
    backgroundColor,
    setBackgroundColor,
    cssCode,
    updateCssCode,
    handleRadiusChange,
    copyCSS,
    getBorderStyle,
  } = useBorder();

  return (
    <main className="bg-dark-secondary/95 pt-0.5 py-8">
      <div className="lg:col-span-2 space-y-6">
        <article>
          <header>
            <h2>Vista previa</h2>
          </header>
          <aside>
            <div className="w-full h-64 rounded-md p-4 flex items-center justify-center bg-muted">
              <div className="w-32 h-32" style={getBorderStyle()}></div>
            </div>
          </aside>
        </article>

        <section>
          <header>
            <h2>Configuración</h2>
          </header>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="border-width">Ancho: {borderWidth}px</label>
                <input
                  type="range"
                  min={0}
                  max={20}
                  step={1}
                  value={borderWidth}
                  onChange={(e) => {
                    setBorderWidth(Number(e.target.value));
                    updateCssCode();
                  }}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                      borderWidth / 0.2
                    }%, #3f3f46 ${borderWidth / 0.2}%, #3f3f46 100%)`,
                  }}
                />
              </div>
              {/* Select aqui */}
              <div className="space-y-2">
                <label htmlFor="border-style">Estilo</label>
                <div className="w-full">
                  <label
                    htmlFor="border-style"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Estilo de borde
                  </label>
                  <select
                    id="border-style"
                    value={borderStyle}
                    onChange={(e) => {
                      setBorderStyle(e.target.value);
                      updateCssCode();
                    }}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="solid">Solid</option>
                    <option value="dashed">Dashed</option>
                    <option value="dotted">Dotted</option>
                    <option value="double">Double</option>
                    <option value="groove">Groove</option>
                    <option value="ridge">Ridge</option>
                    <option value="inset">Inset</option>
                    <option value="outset">Outset</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="border-color">Color</label>
                <div className="flex space-x-2">
                  <div className="w-12 h-10 rounded-md border overflow-hidden">
                    <input
                      type="color"
                      id="border-color"
                      value={borderColor}
                      onChange={(e) => {
                        setBorderColor(e.target.value);
                        updateCssCode();
                      }}
                      className="w-full h-full border-0 cursor-pointer"
                    />
                  </div>
                  <input
                    value={borderColor}
                    onChange={(e) => {
                      setBorderColor(e.target.value);
                      updateCssCode();
                    }}
                    className="font-mono"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="background-color">Color de fondo</label>
              </div>
              <div className="flex space-x-2">
                <div className="w-12 h-10 rounded-md border overflow-hidden">
                  <input
                    type="color"
                    id="background-color"
                    value={backgroundColor}
                    onChange={(e) => {
                      setBackgroundColor(e.target.value);
                      updateCssCode();
                    }}
                    className="w-full h-full border-0 cursor-pointer"
                  />
                </div>
                <input
                  value={backgroundColor}
                  onChange={(e) => {
                    setBackgroundColor(e.target.value);
                    updateCssCode();
                  }}
                  className="font-mono"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label>Radio de borde</label>
                <div className="flex items-center space-x-2">
                  <label htmlFor="link-corners" className="text-sm">
                    Vincular esquinas
                  </label>
                  <input
                    type="checkbox"
                    id="link-corners"
                    checked={linkCorners}
                    onChange={(e) => setLinkCorners(e.target.checked)}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label>Superior izquierda: {borderRadius.topLeft}px</label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={borderRadius.topLeft}
                    onChange={(e) =>
                      handleRadiusChange("topLeft", Number(e.target.value))
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${borderRadius.topLeft}%, #3f3f46 ${borderRadius.topLeft}%, #3f3f46 100%)`,
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label>Superior derecha: {borderRadius.topRight}px</label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={borderRadius.topRight}
                    onChange={(e) =>
                      handleRadiusChange("topRight", Number(e.target.value))
                    }
                    disabled={linkCorners}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${borderRadius.topRight}%, #3f3f46 ${borderRadius.topRight}%, #3f3f46 100%)`,
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label>Inferior izquierda: {borderRadius.bottomLeft}px</label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={borderRadius.bottomLeft}
                    onChange={(e) =>
                      handleRadiusChange("bottomLeft", Number(e.target.value))
                    }
                    disabled={linkCorners}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${borderRadius.bottomLeft}%, #3f3f46 ${borderRadius.bottomLeft}%, #3f3f46 100%)`,
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label>Inferior derecha: {borderRadius.bottomRight}px</label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={borderRadius.bottomRight}
                    onChange={(e) =>
                      handleRadiusChange("bottomRight", Number(e.target.value))
                    }
                    disabled={linkCorners}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${borderRadius.bottomRight}%, #3f3f46 ${borderRadius.bottomRight}%, #3f3f46 100%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
  );
}
