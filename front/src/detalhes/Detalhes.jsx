import { useEffect, useState } from "react";
import ApiProdutoFetch from "../services/HttpServiceProduto";

export default function Detalhes() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ApiProdutoFetch.get()
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="row">
      <div className="col s12 l8 push-l2">
        <p className="center bold" style={{ fontWeight: "bold" }}>
          Detalhe dos Produtos
        </p>
        {items.map((pd) => (
          <div className="card">
            <div className="card-title valign-center center">
              <span>{pd.name}</span>
            </div>
            <hr />
            <div className="modal-content">
              <table className="table-responsive centered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>QUANTIDADE</th>
                  </tr>
                </thead>
                <tbody>
                  {pd.materiaprima.map((mt) => (
                    <tr>
                      <td>{mt.id}</td>
                      <td>{mt.name}</td>
                      <td>{mt.inventory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
