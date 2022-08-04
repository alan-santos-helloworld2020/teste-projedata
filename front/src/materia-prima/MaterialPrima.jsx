import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ModalEditMateriaPrima from "../components/ModalEditMateriaPrima";
import ApiMateriaPrimaFetch from "../services/HttpServiceMateriaPrima";
import M from 'materialize-css';

export default function MateriaPrima() {
  const [materia, setMateria] = useState([]);
  const [edit, setEdit] = useState({
    id:null,
    name:null,
    inventory:null,
  });

  useEffect(() => {
    ApiMateriaPrimaFetch.get()
      .then((data) => setMateria(data))
      .catch((err) => console.log(err.message));

  });

  function deletar(id) {
    Swal.fire({
      title: "Atenção",
      icon: "question",
      text: "Deseja realmente remover?",
      showCancelButton: true,
      confirmButtonText: "sim",
    }).then((res) => {
      if (res.isConfirmed) {
        ApiMateriaPrimaFetch.delete(id).catch((err) => alert(err.message));
      } else {
        return false;
      }
    });
  }

  return (
    <div className="row">
      <div className="col s12 l8 push-l2">
        <p className="center" style={{ fontWeight: "bold" }}>
          Cadastro de Materia-Prima
        </p>
        <table
          className="responsive-table centered striped"
          style={{ marginTop: "50px", width: "100%" }}
        >
          <thead>
            <tr>
              <th className="green">ID</th>
              <th className="green">NOME</th>
              <th className="green">QUANTIDADE</th>
              <th className="red  hide-on-med-and-down">REMOVER</th>
              <th className="blue hide-on-med-and-down">EDITAR</th>
            </tr>
          </thead>
          <tbody>
            {materia.map((mt) => (
              <tr key={mt.id}>
                <td>{mt.id}</td>
                <td>{mt.name}</td>
                <td>{mt.inventory}</td>
                <td>
                  <a
                    className="btn btn-floating red waves-effect waves-light"
                    onClick={() => deletar(mt.id)}
                  >
                    <i className="material-icons">delete</i>
                  </a>
                </td>
                <td>
                  <a className="blue waves-effect waves-light btn-floating modal-trigger"
                  href="#modalEdit"
                  onClick={() => setEdit(mt)}
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalEditMateriaPrima edit={edit}></ModalEditMateriaPrima>
      </div>
    </div>
  );
}
