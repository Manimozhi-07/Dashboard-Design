//Collapse Expand
const btn = document.getElementById("collpase-button");
const list = document.getElementById("list");
function myFunction() {
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}
btn.addEventListener("click", myFunction);

//list display
window.onresize = window.onload = () => {
  var width = this.innerWidth;
  if (width > 900) {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
};

//Tabs
var li = document.querySelectorAll("#list a"); //list array

const main_content = document.querySelectorAll("#content .main"); //main array

function removeActive() {
  li.forEach((l) => {
    l.classList.remove("active");
  });
  main_content.forEach((m) => {
    m.classList.remove("active");
  });
}

li.forEach((l, i) => {
  l.addEventListener("click", () => {
    removeActive();
    l.classList.add("active");
    main_content[i].classList.add("active");
  });
});

//modals
const hoverbtn = document.querySelectorAll(".hoverbtn");
const modal = document.querySelectorAll(".modals");
const clsbtn = document.querySelectorAll(".clsbtn");

hoverbtn.forEach((hb, i) => {
  hb.addEventListener("click", () => {
    modal[i].showModal();
  });
});

clsbtn.forEach((cb, i) => {
  cb.addEventListener("click", () => {
    modal[i].close();
  });
});

//Dynamic items
const list_item = document.querySelectorAll(".list_item");
const item = document.querySelector("#item h4");

li.forEach((l, i) => {
  l.addEventListener("click", () => {
    let text = list_item[i].textContent;
    item.innerText = text;
  });
});

//profile dropdown
const drop = document.getElementById("drop");
const down = document.getElementById("down");

drop.addEventListener("click", myDrop);
function myDrop() {
  if (down.style.display == "block") {
    down.style.display = "none";
    drop.style.transform = "rotate(360deg)";
    resStatus="closed";
  } else {
    down.style.display = "block";
    drop.style.transform = "rotate(180deg)";
  
  }
}
document.addEventListener("click", function (event) {
  if (event.target === down) {
    down.style.display = "none";
    drop.style.transform = "rotate(360deg)";
  }
});

//Form
const details = document.querySelector("#down .dropdown");
const formPop = document.querySelector(".form-popup");
const closeIcon = document.querySelector("#close-icon");

details.addEventListener("click", () => {
  formPop.showModal();
  
});
closeIcon.addEventListener("click", () => {
  formPop.close();
});

//validation
const form = document.querySelector("#reg-form");
const uname = document.querySelector("#uname");
const emailaddress = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const btn1 = document.querySelector("#submit-button");
const reg = /\S+@\S+\.\S+/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
});

uname.addEventListener("input", () => {
  validateUserName();
  enableButton();
});
uname.addEventListener("focusout", () => {
  if (uname.value.trim().length === 0) {
    error(uname, "Name field should not be empty");
  }
});
emailaddress.addEventListener("input", () => {
  validateEmail();
  enableButton();
});
emailaddress.addEventListener("focusout", () => {
  if (emailaddress.value.trim().length === 0) {
    error(emailaddress, "Provide Email Address");
  }
});
password.addEventListener("input", () => {
  validatePassword();
  enableButton();
});
password.addEventListener("focusout", () => {
  if (password.value.trim().length === 0) {
    error(password, "Password field should not be empty");
  }
});
cpassword.addEventListener("input", () => {
  validateConfirmPassword();
  enableButton();
});
cpassword.addEventListener("focusout", () => {
  if (cpassword.value.trim().length === 0) {
    error(cpassword, "Password field should not be empty");
  }
});

function validateUserName() {
  //USERNAME
  if (uname.value.trim().length === 0) {
    error(uname, "Name field should not be empty");
  } else if (uname.value.trim().length < 5 || uname.value.trim().length > 10) {
    error(uname, "Name must be minimum of 5 charcters or maximum of 10");
  } else {
    success(uname);
  }
}
//EMAIL
function validateEmail() {
  if (emailaddress.value.trim().length === 0) {
    error(emailaddress, "Provide Email Address");
  } else if (!emailaddress.value.match(reg)) {
    error(emailaddress, "provide valid email address");
  } else {
    success(emailaddress);
  }
}
//PASSWORD
function validatePassword() {
  if (password.value.trim().length === 0) {
    error(password, "Password field should not be empty");
  } else if (
    password.value.trim().length < 5 ||
    password.value.trim().length > 20
  ) {
    error(password, "Password must be minimum of 5 charcters or maximum of 20");
  } else {
    success(password);
  }
}
//CONFIRM PASSWORD
function validateConfirmPassword() {
  if (cpassword.value.trim().length === 0) {
    error(cpassword, "Password field should not be empty");
  }
  //  else if (
  //   cpassword.value.trim().length < 5 ||
  //   cpassword.value.trim().length > 20
  // ) {
  //   error(
  //     cpassword,
  //     "Password must be minimum of 5 charcters or maximum of 20"
  //   );
  else if (password.value !== cpassword.value) {
    error(cpassword, "Password does not matches");
  } else {
    success(cpassword);
  }
}
function error(element, message) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");

  const para = parent.querySelector("p");
  para.textContent = message;
}
function success(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}
function enableButton() {
  if (
    uname.value.trim().length >= 5 &&
    uname.value.trim().length <= 10 &&
    emailaddress.value.match(reg) &&
    password.value.trim().length >= 5 &&
    password.value.trim().length <= 20 &&
    password.value === cpassword.value
  ) {
    btn1.style.backgroundColor = "green";
    btn1.disabled = false;
  } else {
    btn1.disabled = true;
  }
}


