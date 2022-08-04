import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import M from "materialize-css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Produto from "./produto/Produto";
import MateriaPrima from "./materia-prima/MaterialPrima";
import Navebar from "./components/Navebar";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="box">
      <Navebar></Navebar>
      <Routes>
        <Route path={"/produto"} element={<Produto></Produto>}></Route>
        <Route
          path={"/materiaprima"}
          element={<MateriaPrima></MateriaPrima>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
