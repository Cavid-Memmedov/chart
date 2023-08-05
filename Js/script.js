let btn = document.querySelector("#btn"),
  all = document.querySelector(".article");

btn.addEventListener("click", () => {
  all.style.display = "flex";
});

let selectedMenu = document.querySelectorAll(".menu-select");
let optionMenu = document.querySelector(".menu-options");
let allRightMenu = document.querySelectorAll(".option-item-right");


selectedMenu.forEach((menu) => {
  menu.addEventListener("click", () => {
    selectedMenu.forEach((menuItem) =>menuItem.classList.remove("active"));
    menu.classList.add("active");
    
    toggleOptionMenu();
    
    menu.addEventListener("click", () =>{
      menuItem.classList.remove("active")
    })
  });
});

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

let column=document.querySelector('.option-item');
column.addEventListener("click", () => {
    piechart.classList.add("active");
});


