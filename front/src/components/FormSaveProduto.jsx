import { useState,useEffect } from "react";
import ProdutoValidations from "../validation/ProdutoValidations";

export default function FormSaveProduto() {

  const [produto, setProduto] = useState({
    name: "",
    price: 0
  });

  useEffect(()=>{
      
  },[])

  function save(){
    ProdutoValidations.Save(produto)
    setProduto({
      name: "",
      price: 0,
    })
  }

  return (
    <form className="col l8 push-l2"  style={{marginTop:"2%"}}>
       <div className="input-field col s12">
          <i className="material-icons prefix">person</i>
          <input
            type="text"
            value={produto.name}
            onChange={(e) => setProduto({ ...produto, name: e.target.value })}
            name="name"
            id="name"
          />
          <label htmlFor="name" className="active">
            Nome
          </label>
        </div>
        
        <div className="input-field col s12">
          <i className="material-icons prefix">money</i>
          <input
            type="text"
            value={produto.price}
            onChange={(e) => setProduto({ ...produto, price: e.target.value })}
            name="price"
            id="price"
          />
          <label htmlFor="name" className="active">
            Preço
          </label>
        </div>

        <div className="col s12">
          <button
            type="button"
            className="btn btn-small modal-close waves-effect waves-green right"
            onClick={()=>save()}
          >
            salvar
            <i className="material-icons left">send</i>
          </button>
        </div>
    </form>
  );
}
