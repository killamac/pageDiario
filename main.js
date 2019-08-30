

function chargeData(){
 
    var   usuario = {  
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        sexo: obtenerSexo(),
        provincia: obtenerProvincia(),
        animalesFavoritos: obtenerAnimalesFavoritos(),

    }
    console.log("usuario: " , usuario);
}

function obtenerSexo(){
    var sexo= document.getElementsByName("sexo");
    for(var i=0;i<sexo.length;i++){
        if(sexo[i].checked){ 
            return sexo[i].value;
        }
    }
}

function obtenerAnimalesFavoritos(){
    var animales= document.getElementsByName("animalesFavoritos");
    var animalesFavoritos=[];
    for(var i=0;i<animales.length;i++){
        if(animales[i].checked){ 
            animalesFavoritos.push(animales[i].value);
            ;
        }
    }
    return animalesFavoritos;
}

function obtenerProvincia(){
    var selectProvincia = document.getElementById("provincia");
    return selectProvincia.options[selectProvincia.selectedIndex].value;

}
