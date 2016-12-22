var pion1 = document.getElementById("pion1");
var bombe = document.getElementById("bombe"),
    explo1 = document.getElementById("img1"),
    explo2 = document.getElementById("img2"),
    explo3 = document.getElementById("img3"), 
    explo4 = document.getElementById("img4"),
    explo5 = document.getElementById("img5"),
    s = pion1.style, // Un petit raccourci
    i = 500, // On récupère la position absolue initiale.
    j = pion1.offsetTop,
    s2= bombe.style,
    s3= explo1.style,
    s4= explo2.style,
    s5= explo3.style,
    s6= explo4.style,
    s7= explo5.style;
   
console.log(i);


 var mechant = document.getElementById("mechant");
 var smechant=mechant.style,
             imechant=mechant.offsetLeft,
             jmechant=mechant.offsetTop;


var fond=document.getElementById("fond");
var gagne = document.getElementById("gagne");
var perdu = document.getElementById("perdu");
var jeux = document.getElementById("jeux");

function test3(){
    setTimeout(function(){deplacement(recx,recy);},800);
    smechant.display='block'; 
    imechant=0;
    jmechant=0;
    fond.style.display='none';  
    jeux.style.display='block';
  
      
  }

   function test4(){
    gagne.style.visibility = "hidden";
    fond.style.display='block';  
     
    
    
}

  function test5(){
    perdu.style.visibility = "hidden";
    jeux.style.display='block';  
      imechant=0;
      jmechant=0;
    
    
}
     

     
 
function isCollide(a, b) {
  console.log(a.x);
 console.log(a.y);
   console.log(b.x);
   console.log(b.y);
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}

   
    
 var condition=true;
    var test=0;
var comp=0;
document.onkeydown = function(event){
     var   keyCode = event.keyCode;
    
    
      if(keyCode==38) //haut
      { if(j>0){
            comp=comp+1;
         modulo= comp % 2;
         if(modulo==0){s.backgroundImage="url(image/haut1.png) ";}
         else{s.backgroundImage="url(image/haut2.png) ";}
          
          j = j-50; 
      
      }}
    
       if (keyCode==40)//bas
    { if(j<470){
         comp=comp+1;
         modulo= comp % 2;
         if(modulo==0){s.backgroundImage="url(image/bas1.png) ";}
         else{s.backgroundImage="url(image/bas2.png) ";}
        j = j+50;
         
    }}
    
     if(keyCode==37)//gauche
     { if(i>0){
        comp=comp+1;
         modulo= comp % 2;
         if(modulo==0){s.backgroundImage="url(image/gauche1.png) ";}
          else{s.backgroundImage="url(image/gauche2.png) ";}
             
             i = i-50;
         
         }
                    }
     if(keyCode==39)//droite
     { if(i<470){
         comp=comp+1;
         modulo= comp % 2;
         if(modulo==0){
         s.backgroundImage="url(image/droit1.png) ";}
         else{s.backgroundImage="url(image/droit2.png) ";}
         i= i+50;
     
     }
     }
      
     if (keyCode ==32){
          
         
         if(condition==true)  {
            condition=false;
           
            bombe.style.display = 'block';   
            s2.left = String(i)+"px";
            s2.top = String(j)+"px";
            var i1=i;
            var j1=j;
           
          var time=  setTimeout (function()   {  
              
        
              
                s2.display = 'none';
              
                
              

                s3.display = 'block';  
                s3.left= i1+50+"px";
                s3.top= j1+"px";
              

              
               
               

                s4.left= i1-50+"px";
                s4.top= j1+"px";
                s4.display = 'block';
               

                s5.display = 'block';  
                s5.left= i1+"px";
                s5.top= j1+50+"px";

                s6.display = 'block';  
                s6.left= i1+"px";
                s6.top= j1-50+"px";

              
                s7.display = 'block';
                s7.left= i1+"px";
                s7.top= j1+"px";
             
        
               pion1.width = 45; pion1.height = 45; 
               explo1.width = 50; explo2.width = 50; explo3.width=50;
               explo4.width = 50; explo5.width = 50;
               explo1.height = 50;  explo2.height = 50;   explo3.height = 50; 
                explo4.height = 50; explo5.height = 50;   
                    
              mechant.width= 50; mechant.height=50;
              
              mechant.x= parseFloat(mechant.style.left.replace("px",""));    
              explo1.x= parseFloat( explo1.style.left.replace("px",""));
              explo2.x= parseFloat( explo2.style.left.replace("px",""));
              explo3.x= parseFloat( explo3.style.left.replace("px",""));
              explo4.x= parseFloat( explo4.style.left.replace("px",""));
              explo5.x= parseFloat( explo5.style.left.replace("px",""));
              pion1.x= parseFloat( pion1.style.left.replace("px",""));
              pion1.x= pion1.x+1;
              mechant.y= parseFloat(mechant.style.top.replace("px",""));    
              explo1.y= parseFloat(explo1.style.top.replace("px",""));
              explo2.y= parseFloat(explo2.style.top.replace("px",""));
              explo3.y= parseFloat(explo3.style.top.replace("px",""));
              explo4.y= parseFloat(explo4.style.top.replace("px",""));
              explo5.y= parseFloat(explo5.style.top.replace("px",""));
              pion1.y= parseFloat( pion1.style.top.replace("px",""));
              pion1.y= pion1.y+1;
            
              console.log( "derniere position y" +pion1.y); console.log("derniere position x" +pion1.x); 
              
              
              var collision1 = false;
               var collision = false;
             
             
              if(isCollide(explo1,mechant)) { collision = true;}
              if(isCollide(explo2,mechant)) { collision = true;}
              if(isCollide(explo3,mechant)) { collision = true;}
              if(isCollide(explo4,mechant)) { collision = true;}
              if(isCollide(explo5,mechant)) { collision = true;}
              
              if(isCollide(pion1, explo1)) { collision1 = true;}
              if(isCollide(pion1, explo2)) { collision1 = true;}
              if(isCollide(pion1, explo3)) { collision1 = true;}
              if(isCollide(pion1, explo4)) { collision1 = true;}
              if(isCollide(pion1, explo5)) { collision1 = true;}
              
              
              
              if(collision==true){
               smechant.display = 'none';
               gagne.style.visibility ='visible'; 
                jeux.style.display ='none';  
                  
                 collision=false;
               
               
           }
              
              if(collision1 ==true){
                 jeux.style.display ='none'; 
                 perdu.style.visibility='visible'; 
                   
                  collision1=false;
                  
               
              }
              
              
              
              
                var time1 = setTimeout (function()   {  
                    s3 .display = 'none';
                    s4.display = 'none'; 
                    s5.display = 'none'; 
                    s6.display = 'none';
                    s7.display = 'none';
                    condition=true;
                    
               
           
             
                      
                     
                   
                    
              },1000) ;       
        },3000 ) ;       
    } 
      
         
       
         
   }
                        
                        
          
      
    
    s.left = String(i)+"px";
    s.top = String(j)+"px";
}



