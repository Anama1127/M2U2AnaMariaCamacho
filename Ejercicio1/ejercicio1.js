var numeroMaterias = document.getElementById("numeroMaterias")
var formulario1 = document.getElementById("formulario")
const boton = document.getElementById("boton")

boton.addEventListener("click", function(){
    //Variable numero de materias seleccionadas//
    var nombre = document.getElementById("nombre")
    let datosEstudiante = document.getElementById("datosEstudiante")

    var checkboxes = formulario1.checkbox;
    var contador = 0;
    for (var x=0; x < checkboxes.length; x++) {
    if (checkboxes[x].checked) {
    contador = contador + 1;
    }
    }
    document.getElementById("numeroMaterias").innerHTML = contador;

    //Nombre del estudiante en el resumen de pago//
    document.getElementById("datosEstudiante").innerHTML = "Nombre del estudiante:    " +nombre.value;

    //Variable calculo valor a pagar//
        let valorcheckout1 = document.getElementById("checkbox1")
        if(valorcheckout1.checked == true){
            250000
        }
        else{
            ""
        }

        console.log(valorcheckout1)
        var valorcheckout2 = document.getElementById("checkbox2")
        if(valorcheckout2.checked == true){
            200000
        }
        else{
            0
        }

        var valorcheckout3 = document.getElementById("checkbox3")
        if(valorcheckout3.checked == true){
            125000
        }
        else{
            0
        }

        var valorcheckout4 = document.getElementById("checkbox4")
        if(valorcheckout4.checked == true){
            180000
        }
        else{
            0
        }

        var valorcheckout5 = document.getElementById("checkbox5")
        if(valorcheckout5.checked == true){
            150000
        }
        else{
            0
        }

        var valorcheckout6 = document.getElementById("checkbox6")
        if(valorcheckout6.checked == true){
            175000
        }
        else{
            0
        }

        var sumaValor = parseInt(valorcheckout1)+parseInt(valorcheckout2.value)+parseInt(valorcheckout3.value)+parseInt(valorcheckout4.value)+parseInt(valorcheckout5.value)+parseInt(valorcheckout6.value)
        document.getElementById("valorMaterias").innerHTML = sumaValor;
//Valor del descuento//
document.getElementById("descuento").innerHTML = sumaValor*0.2;

//Valor neto a pagar//
document.getElementById("valorNeto").innerHTML = sumaValor-(sumaValor*0.2)+28000;
    }
)