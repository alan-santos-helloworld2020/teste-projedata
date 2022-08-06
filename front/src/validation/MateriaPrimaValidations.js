import ApiMateriaPrimaFetch from "../services/HttpServiceMateriaPrima"


const MateriaPrimaValidations = {
    Save: (materiaPrima) => {
        if (materiaPrima.name === "" || materiaPrima.name === undefined || materiaPrima.name === null) {
            alert("Name Required")
        } else if (materiaPrima.inventory === "" || materiaPrima.inventory === undefined || materiaPrima.inventory === null) {
            alert("Inventory Required")
        } else {
            ApiMateriaPrimaFetch.save(materiaPrima)            
        }
    },
    Update: (materiaPrima) => {
        if (materiaPrima.inventory === "" || materiaPrima.inventory === undefined || materiaPrima.inventory === null) {
            alert("Name Required")
        } else if (materiaPrima.inventory === "" || materiaPrima.inventory === undefined || materiaPrima.inventory === null) {
            alert("Inventory Required")
        } else {
            ApiMateriaPrimaFetch.edit(materiaPrima)

        }
    }
} 

export default MateriaPrimaValidations;