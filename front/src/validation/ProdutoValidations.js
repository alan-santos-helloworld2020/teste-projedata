import ApiProdutoFetch from "../services/HttpServiceProduto"

const ProdutoValidations = {
    Save: (produto) => {
        if (produto.name === "" || produto.name === undefined || produto.name === null) {
            alert("name not null")
        } else if (produto.price === "" || produto.price === undefined || produto.price === null) {
            alert("price not null")
        } else {
            ApiProdutoFetch.save(produto)            
        }
    },
    Update: (produto) => {
        if (produto.name === "" || produto.name === undefined || produto.name === null) {
            alert("name not null")
        } else if (produto.price === "" || produto.price === undefined || produto.price === null) {
            alert("price not null")
        } else {
            ApiProdutoFetch.edit(produto)

        }
    }
} 

export default ProdutoValidations;