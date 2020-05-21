class Validation {

    constructor() {
    }

    async buscarExistencia(elements,tableName) {
        let bandera=false;
        let uri = `${tableName}/buscar?`;
        const behavior = new Behavior();
        let response;
        let data;

        elements.forEach(element=>{
            uri+=`${element.name}=${element.value}&`;
            behavior.small_inputNormal(element,`Ingrese su ${(element.name)}`);
        });

        response = await fetch(uri);
        data = await response.json();

        console.log(data);

        data.forEach(value=>{
            elements.forEach(element=>{
                if(value[element.name]===element.value){
                    behavior.small_inputWarning(element,`${(element.name).toUpperCase()} ya existe`);
                    bandera=true; //si existe
                }
            })
        });
        return bandera;
    }
}