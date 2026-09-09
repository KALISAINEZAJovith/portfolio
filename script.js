// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Rotating role line in the hero
const roles = ["Software Engineer", "Database Enthusiast", "Network Enthusiast", "Problem Solver"];
const roleEl = document.getElementById('roleText');
let roleIndex = 0, charIndex = 0, deleting = false;

function tickRole(){
  const word = roles[roleIndex];
  if(!deleting){
    charIndex++;
    roleEl.textContent = word.slice(0, charIndex);
    if(charIndex === word.length){ deleting = true; setTimeout(tickRole, 1400); return; }
  } else {
    charIndex--;
    roleEl.textContent = word.slice(0, charIndex);
    if(charIndex === 0){ deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  }
  setTimeout(tickRole, deleting ? 40 : 70);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduceMotion){
  roleEl.textContent = roles[0];
} else {
  tickRole();
}
