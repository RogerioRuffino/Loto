



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

function gerarNumeros() {
  let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25];
  let pesos = [0.5964,0.5953,0.6066,0.6019,0.6077,0.5815,0.5841,0.5779,0.5990,0.6223,0.6201,0.5993,0.6124,0.6099,0.5935,0.5921,0.5964,0.5983,0.6234,0.5935,0.5979,0.5877,0.6106,0.6154];
  let qtd = parseInt(document.getElementById('qtd').value);
  if (qtd >= 15 && qtd <= 24) {
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
    result.sort((a, b) => a - b); // ordena o resultado em ordem crescente
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = ''; // limpa a tabela
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
  } else {
    alert(`Por favor, informe uma quantidade de números entre 15 e 24.`);
  }
}


//     function gerarNumeros() {

//       let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25];
//       let pesos = [0.5964,0.5953,0.6066,0.6019,0.6077,0.5815,0.5841,0.5779,0.5990,0.6223,0.6201,0.5993,0.6124,0.6099,0.5935,0.5921,0.5964,0.5983,0.6234,0.5935,0.5979,0.5877,0.6106,0.6154];
//   let qtd = parseInt(document.getElementById('qtd').value);
//   if (qtd >= 15 && qtd <= 24) {
//     let result = [];
//     let nums = numeros.slice();
//     for (let i = 0; i < qtd; i++) {
//       let totalPeso = pesos.reduce((a, b) => a + b);
//       let random = Math.random() * totalPeso;
//       let j = 0;
//       while (random > 0) {
//         random -= pesos[j];
//         j++;
//       }
//       j--;
//       result.push(nums[j]);
//       nums.splice(j, 1);
//       pesos.splice(j, 1);
//     }
//     result.sort((a, b) => a - b); // ordena o resultado em ordem crescente
//     let tabela = document.getElementById('tabela');
//     tabela.innerHTML = ''; // limpa a tabela
//     let index = 0;

//     for (let i = 0; i < Math.ceil(qtd/5); i++) {
//       let linha = tabela.insertRow();
//       for (let j = 0; j < 5; j++) {
//         let celula = linha.insertCell();
//         if (index < result.length) {
//           celula.textContent = result[index];
//           index++;
//         }
//       }
//     }
//   } else {
//     alert(`Por favor, informe uma quantidade de números entre 15 e 24.`);
//   }
// }