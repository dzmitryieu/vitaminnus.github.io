const list = document.querySelector(".list");
const header__menu = document.querySelector(".header__menu");
const popup__layout = document.querySelector(".popup__layout");



list.addEventListener('click', function(){  
  toggle();   
});


header__menu.addEventListener('click', function(){  
  header__menu.classList.remove('visible'); 
  popup__layout.classList.remove('visible'); 
});


popup__layout.addEventListener('click', function(){  
  toggle(); 
});

function toggle(){
  header__menu.classList.toggle('visible');  
  popup__layout.classList.toggle('visible');  
}



  
