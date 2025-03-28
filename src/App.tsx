import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import AppRoutes from "./router";

function App() {
  return (
    <>
      <div>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
