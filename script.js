



const callButton = document.getElementById("call-lotofacil");
callButton.addEventListener('click', () => {
  // code to call another program
  // for example, redirect to another HTML page:
  window.location.href = 'index.html';
});

function limpa() {
    document.getElementById('qtd').value = '';
    document.getElementById('tabela').innerHTML = '';
    
}


  let valores = {15:2.50, 16: 40.00, 17:340.00, 18: 2040.00, 19 : 9690.00, 20: 38760.00};
  function gerarNumeros() {
  let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  let pesos = [0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926,0.5926];
  let qtd = parseInt(document.getElementById('qtd').value);
  if (qtd >= 15 && qtd <= 20) {
    let result = [];
    let nums = numeros.slice();
    for (let i = 0; i < qtd; i++) {
      let totalPeso = pesos.reduce((a, b) => a + b);
      let random = Math.random() * totalPeso;
      let j = 0;
      while (random > 0) {
        random -= pesos[j];
        j++;
      }
      j--;
      result.push(nums[j]);
      nums.splice(j, 1);
      pesos.splice(j, 1);
    }
    result.sort((a, b) => a - b);
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = '';
    let index = 0;

    let linha = tabela.insertRow();
    let texto = linha.insertCell();
    texto.textContent = "Os números gerados são:";
    texto.setAttribute('colspan', '5');

    for (let i = 0; i < Math.ceil(qtd/5); i++) {
      linha = tabela.insertRow();
      for (let j = 0; j < 5; j++) {
        let celula = linha.insertCell();
        if (index < result.length) {
          celula.textContent = result[index];
          index++;
        }
      }
    }
    
    linha = tabela.insertRow();
let valorAposta = valores[qtd];
let textoAposta = `Valor da aposta para ${qtd} números: R$ ${valorAposta.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
let celulaAposta = linha.insertCell();
celulaAposta.setAttribute('colspan', '5');
celulaAposta.setAttribute('class', 'aposta');
celulaAposta.textContent = textoAposta;

    // linha = tabela.insertRow();
    // let valorAposta = valores[qtd];
    // let textoAposta = `Valor da aposta para ${qtd} números: R$ ${valorAposta.toFixed(2)}`;
    // let celulaAposta = linha.insertCell();
    // celulaAposta.setAttribute('colspan', '5');
    // celulaAposta.setAttribute('class', 'aposta');
    // celulaAposta.textContent = textoAposta;
    


  } else {
    alert(`Por favor, informe uma quantidade de números entre 15 e 20.`);
  }
}
