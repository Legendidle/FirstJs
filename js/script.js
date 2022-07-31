// var elFindAge = prompt("Yoshingizni kiriting !");

// if (elFindAge >= 8 && elFindAge <= 15) {
//   console.log("hali yosh bolasiz");
// }
// else if (elFindAge > 15 && elFindAge <= 25) {
//   console.log("Voyaga yetmagansiz");
// }
// else if (elFindAge > 25 && elFindAge <= 40) {
//   console.log("Voyaga yetgansiz");
// }
// else if (elFindAge > 40 && elFindAge <= 60) {
//   console.log("Yoshi katta insonsiz");
// }
// else if (elFindAge > 60 && elFindAge < 80) {
//   console.log("Oqsoqolsiz amaki");
// }
// else if (elFindAge >=80 ) {
//   console.log("Umriz uzoq bo'lsin");
// }
// else {
//   console.log("Iltimos yoshingizni kiriting");
// }


var warning=alert('Xush kelibsiz !'),
firstName=prompt("Ismingiz ?").trim(),
lastName=prompt("Familyangiz ?").trim(),
yourBirthday=prompt("Tug'ilgan kuningiz ?").trim(),
yourEmail=prompt("E-mail kiriting ?").trim(),
yourNumber=prompt("Telefon raqamingizni kiriting ?").trim(),
yourAdress=prompt("Uy manzilingiz ?").trim(),
yourOccupation=prompt("ishlaysizmi yoki o'qiysizmi ?").trim(),
yourJobAdress=prompt("O'qish yoki ish joyingiz ?").trim(),
aboutYourFamily=prompt("Oliy ma'limotingiz  ?").trim(),
yourFamilyCondition=prompt("Oilaviy sharoitingiz ?").trim(),
thanks=alert("E'tiboringiz uchun rahmat !!!");


var paragraph = document.createElement("p");
paragraph.textContent = `Your name is : ${firstName}`;
document.body.appendChild(paragraph);

var paragraph2 = document.createElement("p");
paragraph2.textContent = `Your surname is : ${lastName}`;
document.body.appendChild(paragraph2);

var paragraph3 = document.createElement("p");
paragraph3.textContent = `Your birthday is on : ${yourBirthday}.`;
document.body.appendChild(paragraph3);

var paragraph4 = document.createElement("p");
paragraph4.textContent = `Your E-mail is : ${yourEmail}`;
document.body.appendChild(paragraph4);

var paragraph5 = document.createElement("p");
paragraph5.textContent = `Your number is : ${yourNumber}`;
document.body.appendChild(paragraph5)

var paragraph6 = document.createElement("p");
paragraph6.textContent = `Your adress is : ${yourAdress}`;
document.body.appendChild(paragraph6);

var paragraph7 = document.createElement("p");
paragraph7.textContent = `Your occupation is : ${yourOccupation}`;
document.body.appendChild(paragraph7);

var paragraph8 = document.createElement("p");
paragraph8.textContent = `Your job adress is : ${yourJobAdress}`;
document.body.appendChild(paragraph8);

var paragraph9 = document.createElement("p");
paragraph9.textContent = `Your family info : ${aboutYourFamily}`;
document.body.appendChild(paragraph9);

var prahraph10 = document.createElement("p");
paragraph10.textContent = `Your family condition : ${yourFamilyCondition}`;
document.body.appendChild(paragraph10);






