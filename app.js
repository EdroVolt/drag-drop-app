const upperSection = document.querySelector(".upper");
const lowerSection = document.querySelector(".lower");
// const imgs = document.querySelectorAll("img");

upperSection.addEventListener("dragstart", function (e) {
  if (e.target.localName === "img") {
    e.dataTransfer.setData("img", e.target.outerHTML);
  }
});

upperSection.addEventListener("dragend", function (e) {
  if (e.target.localName === "img") {
    e.dataTransfer.setData("img", e.target.outerHTML);
    e.target.classList.add("hidden");
  }
});

lowerSection.addEventListener("dragover", function (e) {
  e.preventDefault();
  this.style.background = "green";
});

lowerSection.addEventListener("drop", function (e) {
  e.preventDefault();

  this.innerHTML += e.dataTransfer.getData("img");
  // if (isUpperSectionEmpty()) upperSection.textContent = "Empty";
});

function isUpperSectionEmpty() {
  let isEmpty = true;
  for (const img of [...upperSection.children]) {
    console.log(img);
    if (img.style.display === "inline") return false;
  }
  return isEmpty;
}
