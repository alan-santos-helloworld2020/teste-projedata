import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FormSaveProduto from "../components/FormSaveProduto";
import ModalEditarProduto from "../components/ModalEditarProduto";
import ApiProdutoFetch from "../services/HttpServiceProduto";
import "./style.css"

export default function Produto() {
  const [produto, setProduto] = useState([]);
  const [edit, setEdit] = useState({});

  useEffect(() => {
    ApiProdutoFetch.get().then((data) => {
      setProduto(data);
    });
    console.log(produto);
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

  const editar = (pd) => {
    setEdit(pd);
  };

  return (
    <>
      <div className="row">
        <p className="center" style={{fontWeight:"bold"}}>Cadastro de Produtos</p>
        <FormSaveProduto></FormSaveProduto>
        <div className="col s8 push-l2">
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
                    <button
                      type="button"
                      onClick={() => deletar(pd.id)}
                      className="btn-floating red"
                    >
                      <i className="material-icons">delete</i>
                    </button>
                  </td>
                  <td>
                    <a
                      className="waves-effect waves-light btn-floating modal-trigger blue"
                      href="#modalEdit"
                      onClick={() => editar(pd)}
                    >
                      <i className="material-icons">edit</i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ModalEditarProduto edit={edit}></ModalEditarProduto>
        </div>
      </div>
    </>
  );
}
