// Menggunakan if, else, dan nested if
let diskon = 75000;

if (diskon >= 80000) {
  console.log("Selamat! Anda mendapatkan diskon40%");
} else if (dikon >= 70000) {
  console.log("Selamat anda mendapatkan diskon20%");
} else {
  if (diskon >= 60000) {
    console.log("Mohon maaf anda tidak mendapatkan diskon");
  } else {
    console.log("Belanja lebih banyak lagi ya agar dapat diskon");
  }
}

// Menggunakan switch case
let jadwaluts = "Senin";

switch (jadwaluts) {
  case "Senin":
    console.log("pkn,ipa,pai");
    break; 
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur");
    break;
  default:
    console.log("selamat menjalani uts");
}

// Menggunakan for statement
for (let a = 1; a <= 3; a++) {
  console.log("Iterasi ke-" + a);
}

// Menggunakan while
let nomor = 1;
while (nomor <= 3) {
  console.log("Nomor: " + nomor);
  nomor++;
}

// Menggunakan do while
let i = 1;
do {
  console.log("Nilai i: " + i);
  i++;
} while (i <= 2);

// Menggunakan function
function tambah(a, b) {
  return a * b;
}

let hasil = tambah(5, 2);
console.log("Hasil penjumlahan: " + hasil);