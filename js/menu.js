

let menu =document.querySelector(".menu_pro1");
let logo =document.querySelector(".logo");
let calculo = menu.offsetTop;

 window.addEventListener("scroll",function(){
      
      if(window.pageYOffset > calculo){
          menu.classList.add("men1")
          logo.style. opacity ="1.5";
         

      }else {

        menu.classList.remove("men1")
        menu.style. transition= "2.5s"
        logo.style. opacity ="0";
      }
     
 })

  function porta(){
      
     let portafolio =document.getElementById("s1")
     let portafolio1 =document.getElementById("s2")
     let portafolio3 =document.getElementById("s3")
     let portafolio4 =document.getElementById("s4")

      portafolio4.addEventListener("click",function(){
        window.scroll({
          top:2100,
          left: 100,
          behavior: 'smooth'
        })
      })

        portafolio3.addEventListener("click",function(){
            window.scroll({
              top:1600,
              left:100,
              behavior: 'smooth'
            })
           
        })
      

     portafolio1.addEventListener("click",function(){
      window.scroll({
        top: 1050,
        left: 100,
        behavior: 'smooth'
  
        
      });
     })
     
   portafolio.addEventListener("click",function(){
    window.scroll({
      top: 350,
      left: 100,
      behavior: 'smooth'

      
    });
   })
  }

  porta();



