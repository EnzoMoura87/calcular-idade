function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano'); 
    var res = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value);
        var genero = '';
        //mesma coisa que colocar um img com id foto pelo HTML
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
               img.setAttribute('src', 'imagens/bebe-m.jpg');
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.jpg');
            } else if (idade >= 22 && idade < 60) {
               img.setAttribute('src', 'imagens/adulto-m.jpg');
            } else if(idade >= 60 && idade < 100){
                img.setAttribute('src', 'imagens/idoso-m.jpg');
            } else {
                img.setAttribute('src', 'imagens/caveira.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-f.jpg');
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'imagens/jovem-f.jpg');
            } else if (idade >= 22 && idade < 60) {
                img.setAttribute('src', 'imagens/adulto-f.jpg');
            } else if(idade >= 60 && idade < 100){
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            } else {
                img.setAttribute('src', 'imagens/caveira.jpg')
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img)
    }
}