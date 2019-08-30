

function chargeData(){
 
    var   usuario = {  
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        sexo: obtenerSexo(),


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


