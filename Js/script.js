let columnCanvas = document.getElementById("barChart");
columnCanvas.style.display = "none";

let burunCanvas = document.getElementById("burunChart");
burunCanvas.style.display = "none";

let donutCanvas = document.getElementById("donutChart");
donutCanvas.style.display = "none";

let btn = document.querySelector("#btn"),
  all = document.querySelector(".article");

btn.addEventListener("click", () => {
  all.style.display = "flex";
});

let selectedMenu = document.querySelectorAll(".menu-select");
let optionMenu = document.querySelector(".menu-options");
let allRightMenu = document.querySelectorAll(".option-item-right");

const openMenu = (e) => {
  if(e.classList.contains("active")){
    e.classList.remove("active");
  }
  
  else{
    e.classList.add("active");
    for(let i of selectedMenu){
      if (i!==e){
        i.classList.remove("active");
      };
    };
  };
  
  toggleOptionMenu();
};

function toggleOptionMenu() {
  allRightMenu.forEach((menu) => {
    let menuOption = menu.querySelector(".option-content");
    
    menu.addEventListener("mouseover", () => {
      menu.classList.add("active");
      menuOption.style.display = "block";
    });

    menu.addEventListener("mouseleave", () => {
      menu.classList.remove("active");
      menuOption.style.display = "none";
    });
  });
}

let dountChart = document.querySelector('#donut-chart');
dountChart.addEventListener("click", () => {
  donutCanvas.style.display = "block";
  columnCanvas.style.display = "none";
  burunCanvas.style.display = "none";
});

let column = document.querySelector("#column-chart");
column.addEventListener("click", () => {
  donutCanvas.style.display = "none";
  columnCanvas.style.display = "block";
  burunCanvas.style.display = "none";
});

let burunChart = document.querySelector("#burun-chart");
burunChart.addEventListener("click", () => {
  donutCanvas.style.display = "none";
  columnCanvas.style.display = "none";
  burunCanvas.style.display = "block";
  console.log("yes isleyir");
});


