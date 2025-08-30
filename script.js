const env = document.getElementById('env');
const card = document.getElementById('card');

function toggleEnvelope(){
  const isOpen = !env.classList.contains('open');

  if(isOpen){
    env.classList.add('open');
    env.classList.remove('closed');
    env.setAttribute('aria-pressed','true');
    card.setAttribute('aria-hidden','false');
  } else {
    env.classList.remove('open');
    env.classList.add('closed');
    env.setAttribute('aria-pressed','false');
    card.setAttribute('aria-hidden','true');

    card.style.animation = 'none';
    void card.offsetWidth; 
    setTimeout(()=> { card.style.animation = ''; }, 20);
  }
}

env.addEventListener('click', toggleEnvelope);
env.addEventListener('keydown', e=>{
  if(e.key==='Enter' || e.key===' '){
    e.preventDefault();
    toggleEnvelope();
  }
});
