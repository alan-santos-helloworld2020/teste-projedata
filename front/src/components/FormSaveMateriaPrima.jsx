import { useEffect, useState } from "react";

import MateriaPrimaValidations from "../validation/MateriaPrimaValidations";

export default function FormSaveMateriaPrima() {
  const [addMateria, setAddMateria] = useState({
    name: null,
    inventory: null,
  });

  useEffect(() => {}, []);

  return (
    <form className="col l8 push-l2" style={{ marginTop: "2%" }}>
      <div className="col s12">
        <div className="input-field col s12">
          <i className="material-icons prefix">face</i>
          <input
            type="text"
            value={addMateria.name}
            onChange={(e) =>
              setAddMateria({ ...addMateria, name: e.target.value })
            }
            name="nome"
            id="nome"
          />
          <label htmlFor="nome">Nome</label>
        </div>

        <div className="input-field col s12">
          <i className="material-icons prefix">inventory</i>
          <input
            type="text"
            value={addMateria.inventory}
            onChange={(e) =>
              setAddMateria({ ...addMateria, inventory: e.target.value })
            }
            name="inventory"
            id="inventory"
          />
          <label htmlFor="inventory">Quantidade</label>
        </div>

        <div className="col s12">
          <button className="btn btn-small right"
          type="button"
          onClick={()=>  MateriaPrimaValidations.Save(addMateria)}
          >
            salvar
            <i className="material-icons left">send</i>
          </button>
        </div>
      </div>
    </form>
  );
}
