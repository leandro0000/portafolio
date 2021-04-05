
function myFunction(x) {
  if (x.matches) { 
    window.addEventListener("load",function(){
          
        let anima=document.querySelector(".img_pro");
            anima.style. transition ="1.5s"
            anima.style.transform= 'translatex(30px)'
            anima.style.opacity = "2.5"
   
        
      })

      window.addEventListener("load",function(){
     
        let anima1=document.querySelector(".pre2_pro");
            anima1.style. transition ="1.5s"
            anima1.style.transform= 'translatex(-30px)'
            anima1.style.opacity = "0.5s"
           
        
      })
  } else {
   
  }
  
      
    let portafolio =document.getElementById("s1")
    let portafolio1 =document.getElementById("s2")
    let portafolio3 =document.getElementById("s3")
    let portafolio4 =document.getElementById("s4")

     portafolio4.addEventListener("click",function(){
       window.scroll({
         top:3500,
         left: 100,
         behavior: 'smooth'
       })
     })

     window.addEventListener("resize",function(){
      portafolio3.addEventListener("click",function(){
        window.scroll({
          top:3000,
          left:100,
          behavior: 'smooth'
        })
       
    })
  

 portafolio1.addEventListener("click",function(){
  window.scroll({
    top: 2200,
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
     })
 

 
 


}


function myFunctiony(y) {
  if (y.matches) { 
  
    
    window.addEventListener("load",function(){

      let posti = document.getElementById("s1")
          
         
       posti.style.transform = "transform: translate(-18px, 13px)";


       

   
        
      })

           
        
    
  }
   
  
}

var x = window.matchMedia("(max-width: 750px)")
var y = window.matchMedia("(max-width: 375px)")
myFunction(x) 
myFunctiony(y) 
