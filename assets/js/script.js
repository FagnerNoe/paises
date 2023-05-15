
let quadro = document.querySelector('#quadro');

const apiURL = "https://restcountries.com/v3.1/all/";
const modal = document.getElementById('abrirmodal');
let nomeElem = document.querySelector('#nome');
let capitalElem = document.querySelector('#capital');
let populacaoElem = document.querySelector('#populacao');
let continenteElem = document.querySelector('#continente');
let bandeira = document.querySelector('#flag');


fetch(apiURL)
  .then(response => response.json())
  .then(data => {

    console.log(data);
    data.map((pais) => {
      const bandeiras = document.createElement('a');
      bandeiras.href = "#abrirmodal";                     //direcionando hiperlink para o modal                            
      bandeiras.innerHTML = `
      <img src="${pais.flags.png}"/>
      <p>${pais.translations.por.common}</p>`;
      quadro.appendChild(bandeiras);    //insere um nonvo elemento pagina(no caso dentro de quadro)

      bandeiras.addEventListener('click', () => {
        bandeira.setAttribute('src', pais.flags.png);
        nomeElem.innerHTML = `${pais.translations.por.common}`; //acessando dados do json para mostrar nome em portugues
        capitalElem.innerText = pais.capital;
        populacaoElem.innerText = pais.population.toLocaleString(); // transforma numero em String e adiciona ponto 
        continenteElem.innerText = pais.region;
      })

    });



  });














