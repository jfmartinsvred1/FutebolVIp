const primeiroNome = document.getElementById("primeiroNome");
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const numero = document.getElementById('numero');
const btnForm =  document.getElementById('form');
class Pessoa{
    constructor(primeiroNome,sobrenome,email,numero){
        this.primeiroNome=primeiroNome;
        this.sobrenome=sobrenome;
        this.email=email;
        this.numero=numero
    }
}

$('#form').on('click',(e)=>{
    e.preventDefault()
    let pessoa = new Pessoa(primeiroNome.value,sobrenome.value,email.value,numero.value)
    console.log(pessoa)
    $('#inscricao').find('h2').text("Obrigado por assinar "+pessoa.primeiroNome+"!")
    $('#inscricao').css({"display":"flex"}).fadeOut(8000)


})