function validarNome() {
    let nome = document.getElementById('nome').value

    if(nome != '') {
        return true
    } else {
        return false
    }
}

function validarAssunto() {
    let assunto = document.getElementById('assunto').value;

    if(assunto == "") {
        return false
    } else {
        return true
    }
}

function validarTudo() {
    
    if(validarNome() && validarAssunto()) {
        alert('Dados enviados com sucesso:' + nome + ' e: ' + assunto)
        return true
    } else {
        alert('ERRO AO ENVIAR!!!')
        return false
    }
}

