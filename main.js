const primeiroNome = $("#primeiroNome");
const sobrenome = $('#sobrenome');
const email = $('#email');
const numero = $('#numero');
const btnAssine = $('.btnAssine');
const btnForm =  $('#form');
const divInscricao = $('#inscricao');

class Pessoa{
    constructor(primeiroNome,sobrenome,email,numero){
        this.primeiroNome=primeiroNome;
        this.sobrenome=sobrenome;
        this.email=email;
        this.numero=numero
    }
}

function ZerarValorInputs(){
    primeiroNome.val("");
    sobrenome.val("");
    email.val("");
    numero.val("");
}

btnAssine.on('click', (e) =>{
    var target = $("#formulario").offset();
    var target_top = target.top;
    $('html, body').animate({ scrollTop: target_top }, 200);
})

btnAssine.on('mouseover',(e)=>{
    btnAssine.removeClass("bg-light")
    btnAssine.addClass("bg-secondary")
})

btnAssine.on('mouseout', (e)=>{
    btnAssine.removeClass("bg-secondary")
    btnAssine.addClass("bg-light")
})

btnForm.on('click',(e)=>{
    e.preventDefault()
    let pessoa = new Pessoa(primeiroNome.val(),sobrenome.val(),email.val(),numero.val())

    if(pessoa.primeiroNome.length >=3 && pessoa.sobrenome.length>=3 && pessoa.email.length>=5){
        divInscricao.find('h2').text("Obrigado por assinar "+pessoa.primeiroNome+"!");
        divInscricao.css({"display":"flex"}).fadeOut(8000);
        ZerarValorInputs()
    }
})