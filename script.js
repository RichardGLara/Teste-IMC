let nome = document.getElementById("form_input_nome")
let idade = document.getElementById("form_input_idade")
let peso = document.getElementById("form_input_peso")
let altura = document.getElementById("form_input_altura")
let destino_p = document.getElementById("destino_p")

//----Testes de log----
console.log("nome");
console.log("idade");
console.log("peso");
console.log("altura");
//----Testes de log----

function resposta() {
    if (calculo < 17) {
        msg = "Assina, tio Paulo!!!  :("
        console.log(msg);
        destino_p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi ipsum, ultrices id congue non, venenatis eget libero. Nulla feugiat vestibulum erat sit amet egestas. Phasellus porta, nunc et cursus volutpat, arcu massa laoreet erat, ut mattis est massa vitae sem. Integer id ultricies diam. Proin posuere varius leo, vitae condimentum justo condimentum vel. In hac habitasse platea dictumst. In nec ligula id ante lacinia consequat non ut quam. Donec diam risus, blandit sed tristique quis, blandit et quam. Integer maximus ac mauris vel maximus. Donec convallis sit amet ex facilisis bibendum. Nunc id diam condimentum, porta leo sed, posuere erat. Donec et enim vel purus porta eleifend sed vel augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur lobortis nec massa sed imperdiet. Etiam aliquam justo eros, id eleifend est sollicitudin nec. Etiam condimentum lacus nec gravida tristique."
        window.alert(msg);
    } 
    if (calculo >= 17 && calculo < 18.5) {
        msg = `${nome.value}, você está abaixo do peso...`;
        console.log(msg);
        destino_p.innerText = "Nunc nisi ipsum, ultrices id congue non, venenatis eget libero. Nulla feugiat vestibulum erat sit amet egestas. Phasellus porta, nunc et cursus volutpat, arcu massa laoreet erat, ut mattis est massa vitae sem. Integer id ultricies diam. Proin posuere varius leo, vitae condimentum justo condimentum vel. In hac habitasse platea dictumst. In nec ligula id ante lacinia consequat non ut quam. Donec diam risus, blandit sed tristique quis, blandit et quam. Integer maximus ac mauris vel maximus. Donec convallis sit amet ex facilisis bibendum. Nunc id diam condimentum, porta leo sed, posuere erat. Donec et enim vel purus porta eleifend sed vel augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur lobortis nec massa sed imperdiet. Etiam aliquam justo eros, id eleifend est sollicitudin nec. Etiam condimentum lacus nec gravida tristique."
        window.alert(msg);
    }
    else if (calculo >= 18.5 && calculo < 25) {
        msg = `${nome.value}, você está peso normal!`;
        console.log(msg);
        destino_p.innerText = "Arcu massa laoreet erat, ut mattis est massa vitae sem. Integer id ultricies diam. Proin posuere varius leo, vitae condimentum justo condimentum vel. In hac habitasse platea dictumst. In nec ligula id ante lacinia consequat non ut quam. Donec diam risus, blandit sed tristique quis, blandit et quam. Integer maximus ac mauris vel maximus. Donec convallis sit amet ex facilisis bibendum. Nunc id diam condimentum, porta leo sed, posuere erat. Donec et enim vel purus porta eleifend sed vel augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur lobortis nec massa sed imperdiet. Etiam aliquam justo eros, id eleifend est sollicitudin nec. Etiam condimentum lacus nec gravida tristique."
        window.alert(msg);
    }
    else if (calculo >= 25 && calculo < 30) {
        msg = `${nome.value}, você está acima peso!`
        console.log(msg);
        destino_p.innerText = "In hac habitasse platea dictumst. In nec ligula id ante lacinia consequat non ut quam. Donec diam risus, blandit sed tristique quis, blandit et quam. Integer maximus ac mauris vel maximus. Donec convallis sit amet ex facilisis bibendum. Nunc id diam condimentum, porta leo sed, posuere erat. Donec et enim vel purus porta eleifend sed vel augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur lobortis nec massa sed imperdiet. Etiam aliquam justo eros, id eleifend est sollicitudin nec. Etiam condimentum lacus nec gravida tristique."
        window.alert(msg);
    }
    else if (calculo >= 30 && calculo < 35) {
        msg = `${nome.value}, você está com Obesidade grau I !`
        console.log(msg);
        destino_p.innerText = "In nec ligula id ante lacinia consequat non ut quam. Donec diam risus, blandit sed tristique quis, blandit et quam. Integer maximus ac mauris vel maximus. Donec convallis sit amet ex facilisis bibendum. Nunc id diam condimentum, porta leo sed, posuere erat. Donec et enim vel purus porta eleifend sed vel augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur lobortis nec massa sed imperdiet. Etiam aliquam justo eros, id eleifend est sollicitudin nec. Etiam condimentum lacus nec gravida tristique."
        window.alert(msg);
    }
    else if (calculo >= 35 && calculo <= 40){
        msg = `${nome.value}, você está com O besidade grau II !`
        console.log(msg); 
        window.alert(msg);
    }
    else if (calculo > 40) {
        msg1 = `${nome.value}, você está com Obesidade grau III !`
        msg2 = `Cuidado, BONECÃO DA MICHELIN`
        destino_p.innerText = "Vai morrer..."
        window.alert(msg1);
        window.alert(msg2);
    }
}

function imc(){
    calculo = peso.value / (altura.value ** 2);
    console.log(calculo);
    resposta()
    return calculo;
}

