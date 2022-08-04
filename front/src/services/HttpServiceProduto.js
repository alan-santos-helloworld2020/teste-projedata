const url = "http://localhost:8080/produto/";
const headers = {"content-type":"application/json"};

const ApiProdutoFetch = {
    get:()=> fetch(url,{headers}).then(res=>res.json()),

    getById:(param)=> fetch(url+param,{headers}).then(res=>res.json()),

    save:(param)=> fetch(url,{method:"POST",headers,body:JSON.stringify(param)}).then(res=>res.json()),

    edit:(param)=> fetch(url+param.id,{method:"PUT",headers,body:JSON.stringify(param)}).then(res=>res.json()),

    delete:(param)=> fetch(url+param,{method:"DELETE",headers}).then(res=>res.json())    

}

export default ApiProdutoFetch;