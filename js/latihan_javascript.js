// const p1Display = document.querySelector("#p1-score");
// const p2Display = document.querySelector("#p2-score");
// const p1_papan_button = document.querySelector("#p1-button_score");
// const p2_papan_button = document.querySelector("#p2-button_score");
// const batas_angka = document.querySelector("#angka");
// const reset = document.querySelector("#reset");

// let score = 0;
// let score2 = 0;
// let batas = batas_angka.addEventListener("change", function () {
//   batas = parseInt(this.value);
// });
// isgameover = false;

// p1_papan_button.addEventListener("click", function () {
//   if (!isgameover) {
//     score += 1;
//     if (score === batas) {
//       isgameover = true;
//     }
//     p1Display.textContent = score;
//   }
// });
// p2_papan_button.addEventListener("click", function () {
//   if (!isgameover) {
//     score2 += 1;
//     if (score2 === batas) {
//       isgameover = true;
//     }
//     p2Display.textContent = score2;
//   }
// });
// reset.addEventListener("click", function () {
//   score = 0;
//   score2 = 0;
//   p1Display.textContent = score;
//   p2Display.textContent = score2;
//   isgameover = false;
// });

//

const form = document.getElementById("form-search");
let list = [];
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah pengiriman form secara default
  const input = document.getElementById("search").value;
  list.push(input);
  document.getElementById("result").innerHTML = "";
  // Menggunakan filter untuk memilih nama yang dimulai dengan huruf tertentu
  const filteredNames = list.slice().sort((a, b) => a.localeCompare(b));
  filteredNames.forEach((filteredNames) => {
    const li = document.createElement("li");
    li.textContent = filteredNames;
    document.getElementById("result").appendChild(li);
  });
});
