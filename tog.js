const p = document.getElementById("hi");
p.style.color="red";
const p2 = document.getElementById("bye");
p2.addEventListener("click",function(){
   if(p.style.color=="blue"){
    p.style.color="red";
   }else{
    p.style.color="blue";
   }
    
});
