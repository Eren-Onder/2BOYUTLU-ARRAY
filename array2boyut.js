const notes = [
  ["Hans", 80, 90, 10, 50],
  ["Ulrich", 94, 36, 76, 74],
  ["Olaf", 30, 60, 34, 78],
  ["Otto", 60, 60, 78, 23],
  ["Tina", 71, 45, 89, 100],
  ["Rosalina", 40, 56, 82, 40],
  ["Urs", 49, 45, 56, 67],
  ["Monika", 49, 42, 16, 62],
];
let dersler = [, "matematik", "almanca", "ingilizce", "coğrafya"];
let toplamlar = [0, 0, 0, 0, 0];
let ortalama = [, 0, 0, 0, 0];
let list = [];
let enIyiDers = 0;
let enKotuDers = 100;
let enIyiIndex = 0;
let enKotuIndex = 0;
let enOgr = 0;
let enOgrNot = 0;

for (let i = 0; i < notes.length; i++) {
  for (let j = 1; j < notes[j].length; j++) {
    if (notes[i][j] > 70) {
      if (list.includes(notes[i][0]) == false) {
        list.push(notes[i][0]);
      }
    }
    toplamlar[j] += notes[i][j];
  }
}
for (let i = 1; i < notes[1].length; i++) {
  ortalama[i] = toplamlar[i] / notes.length;
  console.log(dersler[i] + "  dersi not ortalaması: " + ortalama[i]);
  console.log(dersler[i] + "  dersi not toplamı: " + toplamlar[i]);
}

console.log("derslerden 70 üzeri not alan listesi:  ", list);

let ortalamaUstu = [, [], [], [], []];

for (let i = 0; i < notes.length; i++) {
  for (let j = 1; j < notes[i].length; j++) {
    if (notes[i][j] > ortalama[j]) {
      ortalamaUstu[j].push(notes[i][0]);
    }
  }
}

for (let i = 1; i < notes[i].length; i++) {
  console.log(dersler[i], "de ort üzeri alanlar:  ", ortalamaUstu[i]);
}

for (let i = 0; i < notes[i].length; i++) {
  if (ortalama[i] > enIyiDers) {
    enIyiDers = ortalama[i];
    enIyiIndex = i;
  }
  if (ortalama[i] < enKotuDers) {
    enKotuDers = ortalama[i];
    enKotuIndex = i;
  }
}
console.log("en iyi ders: ", dersler[enIyiIndex]);
console.log("en kötü ders: ", dersler[enKotuIndex]);

for (let i = 1; i < notes[0].length; i++) {
  enOgrNot = 0;
  for (let j = 0; j < notes.length; j++) {
    if (notes[j][i] > enOgrNot) {
      enOgrNot = notes[j][i];
      enOgr = j;
    }
  }
  console.log(dersler[i] + " en yükdek not alan : " + notes[enOgr][0]);
}
