import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navebar() {
  useEffect(() => {
    M.AutoInit();
  },[]);
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link
            to={"/"}
            className="brand-logo center"
            style={{ fontWeight: "bold" }}
          >
            Sistema
          </Link>
          <Link to={"#"} data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/produto"}>Produto</Link>
            </li>
            <li>
              <Link to={"/materiaprima"}>Materia-Prima</Link>
            </li>
            <li>
              <Link to={"/detalhes"}>Detalhes</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/produto"}>Produto</Link>
        </li>
        <li>
          <Link to={"/materiaprima"}>Materia-Prima</Link>
        </li>
        <li>
          <Link to={"/detalhes"}>Detalhes</Link>
        </li>
      </ul>
    </div>
  );
}
