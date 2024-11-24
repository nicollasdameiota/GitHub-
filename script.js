const dataInicio = new Date('2024-06-09T00:00:00.000Z');
const contador = document.querySelector('.contador');
const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const coracoes = document.querySelector('.coracoes');

function atualizarContador() {
  const agora = new Date();
  const diferenca = (agora.getTime() - dataInicio.getTime()) / 1000;
  const calculoDias = Math.floor(diferenca / 86400);
  const calculoHoras = Math.floor((diferenca % 86400) / 3600);
  const calculoMinutos = Math.floor((diferenca % 3600) / 60);
  const calculoSegundos = Math.floor(diferenca % 60);

  dias.textContent = calculoDias;
  horas.textContent = calculoHoras.toString().padStart(2, '0');
  minutos.textContent = calculoMinutos.toString().padStart(2, '0');
  segundos.textContent = calculoSegundos.toString().padStart(2, '0');
}

atualizarContador();
setInterval(atualizarContador, 1000);

function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao-animado');
  coracao.textContent = '';
  coracoes.appendChild(coracao);
  coracao.style.left = Math.random() * 100 + '%';
  coracao.style.top = Math.random() * 100 + '%';

  setTimeout(() => {
    coracao.remove();
  }, 3000);
}

setInterval(criarCoracao, 500);