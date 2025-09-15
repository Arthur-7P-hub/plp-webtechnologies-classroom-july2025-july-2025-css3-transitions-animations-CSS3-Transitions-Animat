/* 📚 Part 2: Functions, Scope & Return Values */

// Global variable
let clickCount = 0;

// Reusable function with parameters and return value
function changeBoxColor(boxElement, color) {
  boxElement.style.background = color;
  return `Box color changed to ${color}`;
}

// Function to animate the box
function animateBox() {
  const box = document.getElementById("box");
  box.classList.add("animate");

  // Use setTimeout to remove class after animation ends
  setTimeout(() => box.classList.remove("animate"), 800);
}

// Function demonstrating scope
function incrementClickCount() {
  let message; // local variable
  clickCount++;
  message = `Box clicked ${clickCount} times`;
  console.log(message);
  return message;
}

// DOM Interaction
document.getElementById("colorBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  changeBoxColor(box, "#673ab7");
  animateBox();
  incrementClickCount();
});

/* 🎬 Part 3: Modal Trigger */
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

function toggleModal(show) {
  if (show) modal.classList.add("show");
  else modal.classList.remove("show");
}

openModalBtn.addEventListener("click", () => toggleModal(true));
closeModalBtn.addEventListener("click", () => toggleModal(false));
