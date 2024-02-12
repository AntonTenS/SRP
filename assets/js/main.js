let w = 39;
let body = document.body;
let experients = document.getElementById("exp1");
let work = document.getElementById("mypro1");
let Photography = document.getElementById("Photography1");
let Contact = document.getElementById("Contact1");

let x = document.querySelector(".header-burger");
let y = document.querySelector(".header-navbar");
let z = document.querySelector(".con-header");
x.addEventListener("click", plusActive);

experients.addEventListener("click", minisActive);
work.addEventListener("click", minisActive);
Photography.addEventListener("click", minisActive);
Contact.addEventListener("click", minisActive);

function plusActive() {
  y.className += " active";
  x.className += " active";
  z.className += " dark";
  body.style.overflow = "hidden";
  x.removeEventListener("click", plusActive);
  x.addEventListener("click", minisActive);
}
function minisActive() {
  body.style.overflow = "visible";
  y.classList.remove("active");
  x.classList.remove("active");
  z.classList.remove("dark");

  x.removeEventListener("click", minisActive);
  x.addEventListener("click", plusActive);
}

let urlimg = "assets/images/";
let arrayitaly = [`${urlimg}italy1.jpg`, `${urlimg}italy2.jpg`, `${urlimg}italy3.jpg`, `${urlimg}italy4.jpg`];
let arrayAustralia = [
  `${urlimg}australia1.avif`,
  `${urlimg}australia2.avif`,
  `${urlimg}australia3.avif`,
  `${urlimg}australia4.avif`,
  `${urlimg}australia5.avif`,
];
let arrayindia = [`${urlimg}india1.avif`, `${urlimg}india2.avif`, `${urlimg}india3.avif`];
let arraybrazil = [`${urlimg}brazil1.avif`, `${urlimg}brazil2.avif`, `${urlimg}brazil3.avif`];
let arrayCountries = [arrayitaly, arrayAustralia, arrayindia, arraybrazil];
let imageplace = document.getElementById("placeimg");

function changeimg(contry) {
  for (let i = 0; i < item.length; i++) {
    item[i].classList.remove("activ");
  }
  imageplace.innerHTML = "";
  for (let i = 0; i < contry.length; i++) {
    let p = document.createElement("div");
    p.className = "image-plase__item";
    let img = document.createElement("img");
    img.src = contry[i];
    p.appendChild(img);
    imageplace.appendChild(p);
  }
}

let item = document.querySelectorAll(".flex-country__item");
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", (e) => {
    changeimg(arrayCountries[i]);
    item[i].className += " activ";
  });
}

//let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (currentScrollPos == 0) {
    document.getElementById("header").style.background = "none";
  } else {
    document.getElementById("header").style.background = "black";
  }
  //prevScrollpos = currentScrollPos;
};

let nav = document.querySelectorAll(".navbar-item");
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", (e) => {
    for (let j = 0; j < nav.length; j++) {
      nav[j].classList.remove("active");
    }
    nav[i].className += " active";
  });
}

//console.log(experients);

const exp = document.getElementById("exp");

let callback1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      experients.className += " active";
    } else {
      experients.classList.remove("active");
    }
  });
};
const options1 = {
  threshold: 0,
};

const observer = new IntersectionObserver(callback1, options1);
observer.observe(exp);

//==========================================================

const mypro = document.getElementById("mypro");

let callback2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      work.className += " active";
    } else {
      work.classList.remove("active");
    }
  });
};
const options2 = {
  threshold: 0,
};

const observer2 = new IntersectionObserver(callback2, options2);
observer2.observe(mypro);

//===============================================================
const Photography1 = document.getElementById("Photography");

let callback3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      Photography.className += " active";
    } else {
      Photography.classList.remove("active");
    }
  });
};
const options3 = {
  threshold: 0,
};

const observer3 = new IntersectionObserver(callback3, options3);
observer3.observe(Photography1);

//=================================================================
const Contact1 = document.getElementById("contact");

let callback4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      Contact.className += " active";
    } else {
      Contact.classList.remove("active");
    }
  });
};
const options4 = {
  threshold: 0,
};

const observer4 = new IntersectionObserver(callback4, options4);
observer4.observe(Contact1);
