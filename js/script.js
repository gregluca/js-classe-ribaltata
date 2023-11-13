// //Local storage è una propietà di window che ci consente di archiviare dati all'interno del browser che persistono anche quando chiudiamo il browser, quindi informazioni che vogliamo tenere tra le sessioni
// //accetta come dati inseriti solo dati semplici che vengono convertiti in strighe, e prende massimo due elementi, il primo è la key e il secondo la value
// //Local Storage può essere manipolato come un Object
// //Può accettare dati complessi come altri oggetti usando JSON.stringify nella value e JSON.parse quando vogliamo prelevare questa value
// //ha uno spazio di archiviazione che varia tra 5/10Mb, dipende dal browser

// //DOVE E QUANDO SI USA
// //Memorizzare preferenze dell'utente come i prodotti salavti in un carrello in un e-commerce vedi amazon, vedi Zalando carrello ispeziona --> Applications --> Local Storage

// //METODI
// // localStorage.setItem()
// // localStorage.getitem()
// // localStorage.removeItem()
// // localStorage.clear()
// //localStorage.key

// console.log(localStorage);
// const usernameElem = document.getElementById("username");
// const welcomeElem = document.querySelector(".welcome");

// welcomeElem.innerHTML = `Benvenuto ${localStorage.username}`;

// //Array vuoto
// const names = [];

// /* localStorage.setItem("array", JSON.stringify(["paolo", "giulio"]));
// console.log(JSON.parse(localStorage.array)); */

// /* const num = localStorage.getItem("number", 5);
// console.log(parseInt(num), typeof num); */

// document.getElementById("submit").addEventListener("click", function (event) {
//   event.preventDefault();
//   const usernameChoice = usernameElem.value;
//   localStorage.setItem("username", usernameChoice);
//   usernameElem.value = "";

//   //names.push(localStorage.username);
//   console.log(names);
//   console.log(localStorage);
//   welcomeElem.innerHTML = `Benvenuto ${localStorage.username}`;
// });

// localStorage.clear(); 