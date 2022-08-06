import ApiProdutoFetch from "../services/HttpServiceProduto"

const ProdutoValidations = {
    Save: (produto) => {
        if (produto.name === "" || produto.name === undefined || produto.name === null) {
            alert("Name Required")
        } else if (produto.price === "" || produto.price === undefined || produto.price === null) {
            alert("Price Required")
        } else {
            ApiProdutoFetch.save(produto)            
        }
    },
    Update: (produto) => {
        if (produto.name === "" || produto.name === undefined || produto.name === null) {
            alert("Name Required")
        } else if (produto.price === "" || produto.price === undefined || produto.price === null) {
            alert("Price Required")
        } else {
            ApiProdutoFetch.edit(produto)

        }
    }
} 

export default ProdutoValidations;