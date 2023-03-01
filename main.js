// Get the necessary HTML element
const listaSpesa = document.getElementById("listaSpesa");

// Use a while loop to continuously prompt for new items
while (true) {
  // Prompt the user to enter a new item
  const newItem = prompt("Aggiungi un elemento alla lista:");

  // Exit the loop if the user clicks "Cancel" or enters an empty string
  if (newItem.trim() === "") {
    break;
  }
  
  // Create a new <li> element and append it to the <ul> list
  const li = document.createElement("li");
  li.textContent = newItem;
  listaSpesa.appendChild(li);
};
