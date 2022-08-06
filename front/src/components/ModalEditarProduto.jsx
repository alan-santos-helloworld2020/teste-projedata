import { useEffect, useState } from "react";
import M from "materialize-css";
import ProdutoValidations from "../validation/ProdutoValidations";

export default function ModalEditarProduto(props) {
  const [produtoSave, setProdutoSave] = useState({
    id:null,
    name:null,
    inventory:null,
  });

  useEffect(() => {
    M.AutoInit();
    setProdutoSave(props.edit);
  }, [props.edit]);

  function update() {
    ProdutoValidations.Update(produtoSave);
    M.AutoInit();
    var instance = M.Modal.getInstance(document.querySelector("#modalEditPD"));
    instance.close();
  }

  return (
      <div id="modalEditPD" className="modal">
        <div className="modal-content">
          <div className="row">
            <div className="title h3 center">Editar Produto</div>

            <div className="input-field col s12">
              <i className="material-icons prefix">person</i>
              <input
                type="text"
                value={produtoSave.name}
                onChange={(e) =>
                  setProdutoSave({ ...produtoSave, name: e.target.value })
                }
                name="name"
                id="name"
              />
              <label htmlFor="name" className="active">
                Name
              </label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">money</i>
              <input
                type="text"
                value={produtoSave.price}
                onChange={(e) =>
                  setProdutoSave({ ...produtoSave, price: e.target.value })
                }
                name="price"
                id="price"
              />
              <label htmlFor="name" className="active">
                Price
              </label>
            </div>

            <div className="input-field col s12">
              <button
                type="button"
                className="btn btn-small waves-effect waves-green right"
                onClick={() => update()}
              >
                <i className="material-icons">edit</i>
              </button>
            </div>
          </div>
        </div>
      </div>
   );
}
