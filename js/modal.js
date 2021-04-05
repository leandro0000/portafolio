function modal(){

    let ventana = document.getElementById("d1")
  
    let visibl = document.querySelector(".modal")
    let cerrar = document.querySelector(".img_cerrar")
    


    let curri =document.getElementById("curri_pro")
    let modapro =document.querySelector(".modal2_pro")
    let cerra = document.querySelector(".cerrar")
    

    
     
     
   ventana.addEventListener("click",function(){
       
          visibl.classList.add("moda")
        
      
   }) 
   
   cerrar.addEventListener("click",function(){
       visibl.classList.remove("moda")
       cerrar.style.transition= "0.2s"
   }) 

     

       curri.addEventListener("click",function(){
           modapro.classList.add("moda5")
       })


       cerra.addEventListener("click",function(){
        modapro.classList.remove("moda5")
        cerrar.style.transition= "0.2s"
    }) 

}

modal()