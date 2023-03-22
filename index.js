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

//tooltip
// var liIcons=document.querySelectorAll("#list i");
// console.log(liIcons);
// var liItems=document.querySelectorAll(".list_item");
// console.log(liItems);
// var w=this.innerWidth;
// function tooltip(){
// if(w>901 && w<990){
//   liIcons.forEach((liIcon,i)=>{
//     liIcon.addEventListener('mouseover',()=>{
//       liItems[i].style.display="block";
//     });
//     liIcon.addEventListener('click',()=>{
//       liItems[i].style.display="none";
//     });
//   });
// }
// }
// tooltip();