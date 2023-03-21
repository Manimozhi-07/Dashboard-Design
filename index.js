//Collapse Expand
var btn=document.getElementById("collpase-button");
var list = document.getElementById("list");
function myFunction() {
    
    if (list.style.display === "block") {
      list.style.display = "none";
    } else {
      list.style.display = "block";
    }
}
btn.addEventListener('click',myFunction);

//list display
window.onresize=window.onload=()=>{
    var width=this.innerWidth;
    if(width>900){
        list.style.display="block";
    }
    else{
        list.style.display="none";
    }
}
