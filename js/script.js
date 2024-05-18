const passwordInput = document.querySelector('#password'); 

passwordInput.addEventListener('input', function(){
    const password = this.value;
    const strengthIndicator = document.querySelector('#password-strength-indicador');
    const strengthText = document.querySelector('#password-strength-text');

    const strengths = {
        0: 'Muito fraca',
        1: 'Fraca',
        2: 'Moderada',
        3: 'Forte',
        4: 'Muito Forte',
    };

    let pontuacao = -1;

    //requisitos
    if(password.length >= 8) pontuacao++;
    if(password.match(/[a-z]/)) pontuacao++;
    if(password.match(/[A-Z]/)) pontuacao++;
    if(password.match(/[0-9]/)) pontuacao++;
    if(password.match(/[^a-zA-Z0-9]/)) pontuacao++;

    // Calculo da %, pq a largura vai ser em %
    const width = (pontuacao/4) * 100;

    switch(pontuacao){
        case 1:
            strengthIndicator.style.backgroundColor = 'red';
            break;
        case 2:
            strengthIndicator.style.backgroundColor = 'orange';
            break;
        case 3:
            strengthIndicator.style.backgroundColor = 'yellow';
            break;
        case 4:
            strengthIndicator.style.backgroundColor = 'green';
            break;
        default:
            strengthIndicator.style.backgroundColor = 'transparent';
            break;
    }
    
    strengthIndicator.style.width = `${width}%`;

    if(password.length > 0){
        strengthText.innerHTML = `Força: ${strengths[pontuacao]}`;
    }else{
        strengthText.innerHTML = '';
    }

});