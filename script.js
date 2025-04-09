const downlodBtn = document.getElementById("download-btn");
let colorBtn = document.getElementById("pick-Color");
let couleur = document.getElementById("couleur");
let counter = document.getElementById("count");
let count;

counter.innerText = localStorage.getItem("count")
  ? localStorage.getItem("count")
  : 0;

downlodBtn.addEventListener("click", downloadPDF);
function downloadPDF() {
  const element = document.getElementById("cv");
  html2pdf()
    .from(element)
    .save("cv.pdf")
    .then(() => {
      if (localStorage.getItem("count")) {
        count = +localStorage.getItem("count");
      }
      count += 1;
      localStorage.setItem("count", count);

      counter.innerText = localStorage.getItem("count");
    });
}

const changeColor = (valeur) => {
  colorBtn.addEventListener("click", () => {
    document.documentElement.style.setProperty("--bg-color", valeur);
  });
};
