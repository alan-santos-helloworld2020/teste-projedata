import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import M from "materialize-css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Produto from "./produto/Produto";
import MateriaPrima from "./materia-prima/MaterialPrima";
import Navebar from "./components/Navebar";
import Home from "./home/Home";
import Detalhes from "./detalhes/Detalhes";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="box">
      <Navebar></Navebar>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/produto"} element={<Produto></Produto>}></Route>
        <Route
          path={"/materiaprima"}
          element={<MateriaPrima></MateriaPrima>}
        ></Route>
        <Route path={"/detalhes"} element={<Detalhes></Detalhes>}></Route>
      </Routes>
    </div>
  );
}

export default App;
