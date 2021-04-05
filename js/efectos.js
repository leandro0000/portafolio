window.addEventListener("load",function(){
          
    let anima=document.querySelector(".img_pro");
        anima.style. transition ="1.3s"
        anima.style.transform= 'translatex(170px)'
        anima.style.opacity = "2.5"
      
         

    
  })

  window.addEventListener("load",function(){
     
   let anima1=document.querySelector(".pre2_pro");
       anima1.style. transition ="1.3s"
       anima1.style.transform= 'translatex(-170px)'
       anima1.style.opacity = "0.5s"
      
   
 })

 setTimeout(function(){

   let efecto= document.querySelector(".nombre");
   efecto.style.opacity ="1.5";
   efecto.style.transition ="1.0s"
   efecto.style.transform ="scale(1.2)"
     

 },1500)

  setTimeout(function(){

    let efecto2 =document.querySelector(".text_pro");
    efecto2.style.transform ="translatey(-5px)"
    efecto2.style.opacity ="1.5"
    efecto2.style.transition ="1.5s";

  },2000)