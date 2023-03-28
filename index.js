//Collapse Expand
const btn=document.getElementById("collpase-button");
const list = document.getElementById("list");
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
var li=document.querySelectorAll("#list a");  //list array

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
const modal=document.querySelectorAll('.modals');
const clsbtn=document.querySelectorAll('.clsbtn')

hoverbtn.forEach((hb,i)=>{
  hb.addEventListener('click',()=>{
    modal[i].showModal();
  });
});

clsbtn.forEach((cb,i)=>{
  cb.addEventListener('click',()=>{
    modal[i].close();
  });
});

//Dynamic items
const list_item=document.querySelectorAll(".list_item");
const item=document.querySelector("#item h4");

li.forEach((l,i)=>{
  l.addEventListener('click',()=>{
    let text=list_item[i].textContent;
    item.innerText=text;
   
  });
});

//profile dropdown
const drop=document.getElementById("drop");
const down=document.getElementById("down");

drop.addEventListener('click',myDrop);
function myDrop(){
  
  if(down.style.display==="block"){
      down.style.display="none";
      drop.style.transform="rotate(360deg)";
    }
    else{
      down.style.display="block";
      drop.style.transform="rotate(180deg)";
     
    }
}
document.addEventListener('click',function(event) {
  
  if (event.target === down) {
      down.style.display = "none";
      drop.style.transform="rotate(360deg)";
  }
});
