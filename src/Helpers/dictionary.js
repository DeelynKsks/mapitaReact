export const dictionary = {
    coordenadas:(c) => {

        const coordenadas = c.target.value.split(", ")

        console.log(coordenadas)

    },

    descripcion:(c) => {

        const lista = c.target

        const coordenadas1 = c.target.value
        
        let descripcion

        for (let i = 0; i < lista.length; i++) {
            
            if (lista[i].value == coordenadas1) descripcion = lista[i].id
        }
        
        console.log(descripcion)
    }
}