const prompt = require('prompt-sync')({sigint: true});



// Meminta input dari user
var x = parseInt(prompt("Masukkan bilangan genap:"));

// Memeriksa apakah bilangan negatif
if (x < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (x % 2 !== 0) {
  // Memeriksa apakah bilangan ganjil
  console.log("Tidak bisa input bilangan ganjil");
} else {
  // Menghitung akar pangkat 2 dari bilangan genap
  var result = Math.sqrt(x);
  console.log("Akar pangkat 2 dari", x, "adalah", result);
}