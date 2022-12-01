// const firebaseConfig = {
//     apiKey: "AIzaSyA_sHmbSssZG-uC5NyjbJ5TUqUHRKbC04U",
//     authDomain: "smartodishahack-1ff81.firebaseapp.com",
//     databaseURL: "https://smartodishahack-1ff81-default-rtdb.firebaseio.com",
//     projectId: "smartodishahack-1ff81",
//     storageBucket: "smartodishahack-1ff81.appspot.com",
//     messagingSenderId: "184914579055",
//     appId: "1:184914579055:web:81d5161effd88e72acc79a",
//     measurementId: "G-HDJLVLQ9VW"
//     };
//     firebase.initializeApp(firebaseConfig);
//     function search(){
//     search=document.getElementById('search').value.toUpperCase();
//     var ref=firebase.database().ref('Users');
//     ref.child('Users').orderByChild('name').limitToFirst(5).equalTo(search).on("value", function(snapshot) {
//     console.log(snapshot.val());
//     });
//     }
/*

*/
let names = [
    "Ayla",
    "Jake",
    "Sean",
    "Henry",
    "Brad",
    "Stephen",
    "Taylor",
    "Timmy",
    "Cathy",
    "John",
    "Amanda",
    "Amara",
    "Sam",
    "Sandy",
    "Danny",
    "Ellen",
    "Camille",
    "Chloe",
    "Emily",
    "Nadia",
    "Mitchell",
    "Harvey",
    "Lucy",
    "Amy",
    "Glen",
    "Peter",
  ];
  //Sort names in ascending order
  let sortedNames = names.sort();
  
  //reference
  let input = document.getElementById("search");
  
  //Execute function on keyup
  input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
  
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
      }
    }
  });
  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }
  
