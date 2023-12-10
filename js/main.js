let menu = document.getElementById('menu');
let icon = document.getElementById('menu-icon');

function verMenu(){

   if (menu.style.display == 'none'){
      menu.style.display = 'block';
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-x');
   } else {
      menu.style.display = 'none';
      icon.classList.remove('fa-x');
      icon.classList.add('fa-bars');
   }
};

//Scroll Animations elements
const houseCard = document.querySelectorAll('.houses');

window.addEventListener('scroll', scrollHouses);

scrollHouses();
function scrollHouses(){
   const triggerHouse = window.innerHeight / 5 * 4;

   houseCard.forEach(houses => {
      const houseTop  = houses.getBoundingClientRect().top;

      if(houseTop < triggerHouse){
         houses.classList.add('show');
      } else{
         houses.classList.remove('show');
      }

   });
}

/*Scroll Animated Team
const team = document.querySelectorAll('.arq-card');

window.addEventListener('scroll', scrollTeam);

scrollTeam();
function scrollTeam(){
   const triggerTeam = window.innerHeight / 5 * 4;

   team.forEach(arqCard => {
      const teamTop  = arqCard.getBoundingClientRect().top;

      if(teamTop < triggerTeam){
         arqCard.classList.add('show');
      } else{
         arqCard.classList.remove('show');
      }

   });
}*/