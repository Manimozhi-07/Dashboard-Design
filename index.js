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

//Tabs
const li=document.querySelectorAll("#list a");  //list array

const main_content=document.querySelectorAll("#content .main");  //main array


function removeActive(){
    li.forEach((l)=>{
      l.classList.remove("active");
    });
    main_content.forEach((m)=>{
      m.classList.remove("active");
    });
}

li.forEach((l,i)=>{
  l.addEventListener('click',()=>{
    removeActive();
    l.classList.add("active");
    main_content[i].classList.add("active");
    
  });
});

//modals
const hoverbtn=document.querySelectorAll('.hoverbtn');
console.log(hoverbtn);
function displayModal(){
  alert("displayed");
}
hoverbtn.forEach((hb)=>{
  hb.addEventListener('click',displayModal);
});
