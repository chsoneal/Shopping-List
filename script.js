//create an variable for the button
let button = document.getElementById("submit");
//create a variable for the input
let input = document.getElementById("addItem");
let ul = document.querySelector("ul");
let items = ul.getElementsByTagName("li");



//add new list item after click
function addNewListItemOnClick(){
  if (userEntry() > 0){
  displayNewItem();
  strikeThroughDone();
  }
}

//add new list item after enter key
function addNewListItemOnEnter(event){
  if (userEntry() > 0 && event.keyCode === 13){
    displayNewItem();
    strikeThroughDone();
  }
}

//check for a user entry
function userEntry(){
  return input.value.length;
}
//display new list item on the page
function displayNewItem(){
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "Delete";
  li.appendChild(btn);
  btn.addEventListener("click", function(){
    li.classList.toggle("delete");
  })
      
}

//perform action if user clicks submit
button.addEventListener("click", addNewListItemOnClick);

//perform action if user presses enter
input.addEventListener("keypress", addNewListItemOnEnter);

//strikethrough completed item on click
function strikeThroughDone() {
for(var i = 0; i < items.length; i++)
items[i].addEventListener("click", function(li){
 this.classList.toggle("done");
});}


