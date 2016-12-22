
var x,y,recx,recy,pile;
 
 var  test=true;

var nbrdeplacement=0;
var sommex=0;
var sommey=0;
 



function deplacementX(min,max) {
   return Math.floor(Math.random()*((max-min+1)+min)/50)*50;
}

function deplacementY(min,max) {
   return Math.floor(Math.random()*((max-min)+min));
}



  function deplacement(ancienx,ancieny) {
    var compteur=0;
    var compteur1=0;
     x = deplacementX(-500,500);
     y=  deplacementX(-500,500);
     pile= deplacementY(1,2); 
     recx = x;
     recy=y;  
   
     sommex=sommex+recx;
       sommey=sommey+recy;
//     console.log(x);
//     console.log(y); 
//   console.log(test);
     var time= setInterval( function() {

         if(test == true){
           
           if(compteur<x ){
              
               if  (imechant<=500  && imechant>=0)  { 
              if(pile==1){
        
              compteur = compteur+1;   
              imechant = imechant+1;   
              smechant.left = String(imechant)+"px";}
             
               
               else{
                
                  compteur = compteur+1;  
                 imechant = imechant-1;   
                 smechant.left = String(imechant)+"px";
                
                
            }}   else if(imechant>500){
                        compteur = compteur+1;  
                       imechant = imechant-1;   
                       smechant.left = String(imechant)+"px";
                   pile=2;test=false; clearInterval(time); deplacement(recx,recy);
               }
               else if(imechant < 0) {
                   compteur = compteur+1;  
                       imechant = imechant+1;   
                       smechant.left = String(imechant)+"px";
                   pile=1;test=true; clearInterval(time); deplacement(recx,recy);
               }
        
          
           } else {test=false; clearInterval(time); deplacement(recx,recy);}
         
         }
     
         
         if(test == false){
           
           if(compteur1<y){
             if( jmechant<=500 && jmechant>=0){
              if(pile==1){
        
             compteur1 = compteur1+1;  
             jmechant = jmechant+1; 
              smechant.top = String(jmechant)+"px";}
               else{
                       compteur1 = compteur1+1;   
                       jmechant = jmechant-1;   
                       smechant.top = String(jmechant)+"px";
               }} 
                 else if(jmechant>500){
                        compteur1 = compteur1+1;  
                       jmechant = jmechant-1;   
                       smechant.top = String(jmechant)+"px";
                   pile=2;test=true; clearInterval(time); deplacement(recx,recy);
               }
               else if(jmechant < 0) {
                   compteur1 = compteur1+1;  
                       jmechant = jmechant+1;   
                       smechant.top = String(jmechant)+"px";
                   pile=1;test=true; clearInterval(time); deplacement(recx,recy);
               }
        
          }  else {test=true; clearInterval(time); deplacement(recx,recy);}
           }
         
          
       
        var collision2 = false;
         mechant.x = imechant;
         mechant.y  = jmechant;
         mechant.width=50;
         mechant.height=50;
         pion1.x = i;
         pion1.y = j;
if(isCollide(pion1,mechant)) { collision2 = true;}
if(collision2 == true){
    console.log("mort")
                  jeux.style.display ='none'; 
                 perdu.style.visibility='visible'; 
                  collision1=false;
              }
         
        
     } ,20 ); 
      
   
    
  } 
   



  
