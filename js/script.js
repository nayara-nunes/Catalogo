
// MENU


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);










function changeImageSrc(anything){
  document.querySelector('.shoes').src = anything;

}

function mudaSrc(anything){
  document.querySelector('.sapatos').src =anything;
}

function modifica(anything){
  document.querySelector('.shoes-M').src =anything;
}
function changeSrc(anything){
  document.querySelector('.shoess').src =anything;
}
function changeSrcImage(anything){
  document.querySelector('.shoesS').src =anything;
}

function changeSrcImage2(anything){
  document.querySelector('.shoes-S').src =anything;
}
function shoesMasc(anything){
  document.querySelector('.shoes-Masculino').src =anything;
}
function shoesMasculino(anything){
  document.querySelector('.shoes-Masculinos').src =anything;
}
function shoesCarmen(anything){
  document.querySelector('.shoes-Carmen').src =anything;
}

function SrcTiktok(anything){
  document.querySelector(".shoes-tiktok").src = anything;
}




function SrcQuadrado(anything){
  document.querySelector(".shoes-Sl").src = anything;
}

function SrcBicolor(anything){
  document.querySelector(".shoes-bicolor").src = anything;
}

function SrcAcostamento(anything){
  document.querySelector(".shoes-acostamento").src = anything;
}

function SrcNike(anything){
  document.querySelector(".shoes-nike").src = anything;
}


