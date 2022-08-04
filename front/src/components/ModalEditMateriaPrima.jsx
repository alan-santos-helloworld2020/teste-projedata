import { useEffect, useState } from "react";
import ApiMateriaPrimaFetch from "../services/HttpServiceMateriaPrima";
import M from "materialize-css";

export default function ModalEditMateriaPrima(props) {
  const [materiaPrima, setMateriaPrima] = useState({
    name: null,
    inventory: null,
  });

  useEffect(()=>{
    setMateriaPrima(props.edit)
  },[props.edit])

  function update() { 
    ApiMateriaPrimaFetch.edit(materiaPrima);
    const modal = M.Modal.getInstance(document.querySelector("#modalEdit"));
    modal.close();
  }

  return (
    <>
    <div id="modalEdit" className="modal">
      <div className="modal-content">
      <div className="title h3 center">Editar Matateria Prima</div>
        <div className="row">

          <div className="input-field col s12">
            <i className="material-icons prefix">person</i>
            <input
              type="text"
              value={materiaPrima.name}
              onChange={(e) =>
                setMateriaPrima({ ...materiaPrima, name: e.target.value })
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
              value={materiaPrima.inventory}
              onChange={(e) =>
                setMateriaPrima({ ...materiaPrima, inventory: e.target.value })
              }
              name="inventory"
              id="inventory"
            />
            <label htmlFor="inventory" className="active">
              Quantidade
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
    </>
  );
}
