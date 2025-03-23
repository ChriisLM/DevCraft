import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} /> {/*ruta temporal*/}
      <Route path="/layout" element={<Home />} /> {/*ruta temporal*/}
      <Route path="/gradient" element={<Home />} /> {/*ruta temporal*/}
      <Route path="/colors" element={<Home />} /> {/*ruta temporal*/}
      <Route path="/shadows" element={<Home />} /> {/*ruta temporal*/}
      <Route path="/spacing" element={<Home />} /> {/*ruta temporal*/}
      <Route path="/borders" element={<Home />} /> {/*ruta temporal*/}
      <Route path="/animations" element={<Home />} /> {/*ruta temporal*/}
      <Route path="/loaders" element={<Home />} /> {/*ruta temporal*/}
      <Route path="/contrast" element={<Home />} /> {/*ruta temporal*/}
      <Route path="*" element={<Home />} /> {/*ruta temporal*/}
    </Routes>
  );
};

export default AppRoutes;
