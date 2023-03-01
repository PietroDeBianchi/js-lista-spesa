/* // Get the necessary HTML element in this case the <ul id="listaSpesa">
const listaSpesa = document.getElementById("listaSpesa");

// Use a while loop to continuously prompt for new items
while (true) {
  // Prompt the user to enter a new item
  const newItem = prompt("Aggiungi un elemento alla lista:");

  // Exit the loop if the user clicks "Cancel" or enters an empty string
  if (newItem.trim() === "") {
    break; //break is for “jumps out” of a loop
  }

  // Create a new <li> element and append it to the <ul> list
  const li = document.createElement("li");
  li.textContent = newItem;
  listaSpesa.append(li);  // in this case i can also use appendChild but is only for Node objects.
};
*/


const listaSpesa = document.getElementById("listaSpesa");
let keepPrompting = true;

while (keepPrompting) {
  const newItem = prompt("Aggiungi un elemento alla lista:");

  if (newItem === null || newItem.trim() === "") {
    keepPrompting = false;
  } else {
    const li = document.createElement("li");
    li.textContent = newItem;
    listaSpesa.append(li);
  }
}
