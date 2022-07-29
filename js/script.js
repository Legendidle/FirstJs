// console.log(alert('Xush kelibsiz !'));
// console.log(prompt("Ismingiz ?"));
// console.log(prompt("Familyangiz ?"));
// console.log(prompt("Tug'ilgan kuningiz ?"));
// console.log(prompt("E-mail kiriting ?"));
// console.log(prompt("Telefon raqamingizni kiriting ?"));
// console.log(prompt("Uy manzilingiz ?"));
// console.log(prompt("ishlaysizmi yoki o'qiysizmi ?"));
// console.log(prompt("O'qish yoki ish joyingiz ?"));
// console.log(prompt("Oliy ma'limotingiz  ?"));
// console.log(prompt("Oilaviy sharoitingiz ?"));
// console.log(alert("E'tiboringiz uchun rahmat !!!"));


var elFindAge = prompt("Yoshingizni kiriting !");

if (elFindAge >= 8 && elFindAge <= 15) {
  console.log("hali yosh bolasiz");
}
else if (elFindAge > 15 && elFindAge <= 25) {
  console.log("Voyaga yetmagansiz");
}
else if (elFindAge > 25 && elFindAge <= 40) {
  console.log("Voyaga yetgansiz");
}
else if (elFindAge > 40 && elFindAge <= 60) {
  console.log("Yoshi katta insonsiz");
}
else if (elFindAge > 60 && elFindAge < 80) {
  console.log("Oqsoqolsiz amaki");
}
else if (elFindAge >=80 ) {
  console.log("Umriz uzoq bo'lsin");
}
else {
  console.log("Iltimos yoshingizni kiriting");
}