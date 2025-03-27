import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import AppRoutes from "./router";

function App() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-fit w-full bg-[#fbfbfe] dark:bg-[#0b0a0f] bg-[radial-gradient(#504c43_1px,#fbfbfe_1px)] dark:bg-[radial-gradient(#5e5b56_1px,#0b0a0f_1px)] bg-[size:20px_20px]">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
