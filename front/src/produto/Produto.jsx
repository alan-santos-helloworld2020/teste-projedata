import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FormSaveProduto from "../components/FormSaveProduto";
import ModalEditarProduto from "../components/ModalEditarProduto";
import ApiProdutoFetch from "../services/HttpServiceProduto";
import M from "materialize-css";
import "./style.css";
import ModalAddMateriaPrima from "../components/ModalAddMateriaPrima";

export default function Produto() {
  const [produto, setProduto] = useState([]);
  const [edit, setEdit] = useState({
    id: "",
    name: "",
    price: 0,
  });
  const [addPD, setAddPD] = useState({
    id: "",
    name: "",
    price: 0,
  });

  useEffect(() => {
    ApiProdutoFetch.get()
      .then((data) => {
        return setProduto(data);
      })
      .catch((err) => console.log(err));
  });

  function deletar(id) {
    Swal.fire({
      title: "Atenção",
      icon: "warning",
      text: "Deseja realmente remover?",
      showCancelButton: true,
      confirmButtonText: "sim",
    }).then((res) => {
      if (res.isConfirmed) {
        ApiProdutoFetch.delete(id).catch((err) => alert(err.message));
      } else {
        return false;
      }
    });
  }

  function editProduto(pd) {
    M.AutoInit();
    M.Modal.getInstance(document.querySelector("#modalEditPD")).open();
    setEdit(pd);
  }

  return (
  
      <>
        <div className="row">
          <p className="center" style={{ fontWeight: "bold" }}>
            Cadastro de Produtos
          </p>
          <FormSaveProduto></FormSaveProduto>
          <div className="col s12 l8 push-l2">
            <table
              className="responsive-table centered striped"
              style={{ marginTop: "50px" }}
            >
              <thead>
                <tr className="">
                  <th className="green">ID</th>
                  <th className="green">NOME</th>
                  <th className="green">PREÇO</th>
                  <th className="red  hide-on-med-and-down">REMOVER</th>
                  <th className="orange hide-on-med-and-down">MT PRIMA</th>
                  <th className="blue hide-on-med-and-down">EDITAR</th>
                </tr>
              </thead>
              <tbody>
                {produto.map((pd) => (
                  <tr key={pd.id}>
                    <td>{pd.id}</td>
                    <td>{pd.name}</td>
                    <td>{pd.price}</td>
                    <td>
                      <a
                        onClick={() => deletar(pd.id)}
                        className="btn-floating red"
                      >
                        <i className="material-icons">delete</i>
                      </a>
                    </td>

                    <td>
                      <a
                        onClick={() => setAddPD(pd)}
                        className="btn btn-floating modal-trigger orange"
                        href="#modalAddMateriaPrima"
                      >
                        <i className="material-icons">add</i>
                      </a>
                    </td>

                    <td>
                      <a
                        onClick={() => editProduto(pd)}
                        className="waves-effect waves-light btn-floating modal-trigger blue"
                        href="#modalEditPD"
                      >
                        <i className="material-icons">edit</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        <ModalEditarProduto edit={edit}></ModalEditarProduto>
        <ModalAddMateriaPrima addPD={addPD}></ModalAddMateriaPrima>
        </div>
      </>

  );
}
