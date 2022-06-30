let numero1 =document.getElementById("numero1")
let numero2 =document.getElementById("numero2")
let numero3 =document.getElementById("numero3")
let numero4 =document.getElementById("numero4")
const boton = document.getElementById("boton")

boton.addEventListener("click",function(){
    let numeroUno = numero1.value
    let numeroDos = numero2.value
    let numeroTres = numero3.value
    let numeroCuatro = numero4.value
    const respuesta =document.getElementById("respuesta")
    const respuesta2 =document.getElementById("respuesta2")

    if(numeroUno=="" || numeroDos=="" || numeroTres=="" || numeroCuatro==""){
        alert("No pueden quedar campos vacios")
    }
    else{
        if(numeroUno==numeroDos || numeroUno==numeroTres || numeroUno==numeroCuatro || numeroDos==numeroTres || numeroDos==numeroCuatro || numeroTres == numeroCuatro){
            alert("Los numeros ingresados no pueden ser iguales")
        }
        else{
            if(numeroUno>numeroDos && numeroUno>numeroTres && numeroUno>numeroCuatro){
                respuesta.innerHTML = ("El numero mayor es "+numeroUno)
            }
            else{
                if(numeroDos>numeroTres && numeroDos>numeroCuatro && numeroDos>numeroUno){
                    respuesta.innerHTML = ("El numero mayor es "+numeroDos)
                }
                else{
                    if(numeroTres>numeroDos && numeroTres>numeroCuatro && numeroTres>numeroUno){
                        respuesta.innerHTML = ("El numero mayor es "+numeroTres)
                    }
                    else{
                        if(numeroCuatro>numeroDos && numeroCuatro>numeroTres && numeroCuatro>numeroUno){
                        respuesta.innerHTML = ("El numero mayor es "+numeroCuatro)
                    }
                }
            }
        }
    }
}
    if(numeroUno<numeroDos && numeroUno<numeroTres && numeroUno<numeroCuatro){
        respuesta2.innerHTML = ("El numero menor es "+numeroUno)
    }
    else{
        if(numeroTres<numeroDos && numeroTres<numeroCuatro && numeroTres<numeroUno){
            respuesta2.innerHTML = ("El numero menor es "+numeroTres)
        }
        else{
            if(numeroDos<numeroUno && numeroDos<numeroTres && numeroDos<numeroCuatro){
                respuesta2.innerHTML = ("El numero menor es "+numeroUno)
            }
            else{
                if(numeroCuatro<numeroDos && numeroCuatro<numeroTres && numeroCuatro<numeroUno){
                    respuesta2.innerHTML = ("El numero menor es "+numeroCuatro)
            }
        }
    }
    }
}
)

