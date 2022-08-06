import { useEffect,useState } from "react";
import ApiMateriaPrimaFetch from "../services/HttpServiceMateriaPrima";
import ApiProdutoFetch from "../services/HttpServiceProduto";

export default function ModalAddMateriaPrima(props) {
  const [findMateriaPrima, setFindMateriaPrima] = useState([]);
  const [findProduto, setFindProduto] = useState({});

  useEffect(() => {
    M.AutoInit();
    setFindProduto(props.addPD)
    ApiMateriaPrimaFetch.get()
    .then(data=>{        
        setFindMateriaPrima(data)
    },[findMateriaPrima]);
    
  },[props.addPD]);

  function pushMateriaPrima(mt){
    var newMTP = {
      name: mt.name,
      inventory: mt.inventory,
      produto:{
        id:findProduto.id
      }
    } 
    ApiMateriaPrimaFetch.save(newMTP)

  }

  return (
    <div id="modalAddMateriaPrima" className="modal">
      <div className="modal-content">
        <table className="responsive-table centered">
          <thead>
            <tr>
              <th>NOME</th>
              <th>QUANTIDADE</th>
            </tr>
          </thead>
          <tbody>
            {findMateriaPrima.map(mt=>(
              <tr key={mt.id}>
                <td>{mt.name}</td>
                <td>{mt.inventory}</td>
                <td>
                    <button className="btn btn-floating orange waves-effect wave-light"
                    type="button"
                    onClick={()=> pushMateriaPrima(mt)}
                    >
                        <i className="material-icons">download</i>
                    </button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
      <div className="modal-footer">
        <button className="btn btn-small modal-close">
          <i className="material-icons">close</i>
        </button>
      </div>
    </div>
  );
}
