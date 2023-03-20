//Collapse Expand
function myFunction() {
    var x = document.getElementById("list");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

//Resize
window.onresize=window.onload=()=>{
    var width=this.innerWidth;
    var y= document.getElementById("list");
    if(width>900){
        y.style.display="block";
    }
    else{
        y.style.display="none";
    }
}
