let items = document.querySelectorAll(".item");
let panels = document.querySelectorAll(".panel");
let imgs = document.querySelectorAll(".btn");

items.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      if (panels[index].style.display === "none") {
        panels[index].style.display = "block";
        imgs[index].innerHTML = `<img src="assets/images/icon-minus.svg" alt="minus">`;
      } else {
        panels[index].style.display = "none";
        imgs[index].innerHTML = `<img src="assets/images/icon-plus.svg" alt="plus">`;
      }
    });
  });