var pion1 = document.getElementById("pion1"),
    bombe = document.getElementById("bombe"),
    explo1 = document.getElementById("img1"),
    explo2 = document.getElementById("img2"),
    explo3 = document.getElementById("img3"), 
    explo4 = document.getElementById("img4"),
    explo5 = document.getElementById("img5"),
    s = pion1.style, // Un petit raccourci
    i = pion1.offsetLeft, // On récupère la position absolue initiale.
    j = pion1.offsetTop,
    i1 =bombe.offsetLeft, // On récupère la position absolue initiale.
    j1 = bombe.offsetTop,
    s2= bombe.style,
    s3= explo1.style,
    s4= explo2.style,
    s5= explo3.style,
    s6= explo4.style,
    s7= explo5.style;
var haut=0,
    bas=0,
    gauche=0,
    droite=0;
    
    
 var condition=true;
    var test=0;
document.onkeydown = function(event){
     var   keyCode = event.keyCode;
    
    
      if(keyCode==38) //haut
      { if(j>0)
            j = j-50;s.backgroundImage="url(image/haut1.png) ";
      
      }
    
    if (keyCode==40)//bas
    { if(j<470)
        j = j+50;s.backgroundImage="url(image/bas1.png) ";
         
    }
    
     if(keyCode==37)//gauche
     { if(i>0)
          i = i-50;    s.backgroundImage="url(image/gauche1.png) ";
                    }
     if(keyCode==39)//droite
     { if(i<470){
         s.backgroundImage="url(image/droit1.png) ";
         i= i+50;
     
     }
     }
      
     if (keyCode ==32){
         
         
         if(condition==true)  {
            condition=false;
          
            bombe.style.display = 'block';   
            s2.left = String(i)+"px";
            s2.top = String(j)+"px";
             i1=i;
             j1=j;
           
          var time=  setTimeout (function()   {  
              
        
              
                s2.display = 'none';
              
                
              
                droite = i1+50;
                if(droite<=500)
                {
                s3.display = 'block';  
                s3.left= i1+50+"px";
                s3.top= j1+"px";
                
                }
              
               
               
                gauche= i1-50;
                if(gauche>=0){
                s4.left= i1-50+"px";
                s4.top= j1+"px";
                s4.display = 'block';
               
                }
               
              
                bas= j1+50;
                if(bas<=500){
                s5.display = 'block';  
                s5.left= i1+"px";
                s5.top= j1+50+"px";}
             
                 haut= j1-50;
                if(haut>=0){
                s6.display = 'block';  
                s6.left= i1+"px";
                s6.top= j1-50+"px";}
              
                s7.display = 'block';
                s7.left= i1+"px";
                s7.top= j1+"px";
                
                var time1 = setTimeout (function()   {  
                    s3.display = 'none';
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



