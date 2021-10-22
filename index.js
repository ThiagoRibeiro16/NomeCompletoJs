c = confirm("Deseja ver seu nome em diferentes perpectivas? ");

if (c == false) {
    alert("Ok");
}

else

{
    
let nome = prompt ("Digite seu nome: ");

let sobrenome = prompt ("Digite seu sobrenome: ");

alert (`Seu nome completo é ${nome} ${sobrenome}`);

alert (`Seu nome catálogo é ${sobrenome.toUpperCase()}, ${nome}`);

}