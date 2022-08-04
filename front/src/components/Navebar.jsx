import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navebar() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo center" style={{fontWeight:"bold"}}>
            Sistema
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/produto"}>Produto</Link>
            </li>
            <li>
              <Link to={"/materiaprima"}>Materia-Prima</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/produto"}>Produto</Link>
        </li>
        <li>
          <Link to={"/materiaprima"}>Materia-Prima</Link>
        </li>
      </ul>
    </>
  );
}
