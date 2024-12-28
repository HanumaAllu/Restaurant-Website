// Grab references to elements
const menuButton = document.querySelector(".menu"); // Assuming this is the menu trigger
const leftContainer = document.querySelector(".left_container");
const navBar = document.querySelector("nav");
const poster = document.querySelector(".poster"); // Assuming this is the class for the burger icon
const menuContainer = document.querySelector(".menu_container");

// Function to handle menu click
menuButton.addEventListener("click", () => {
  // Show left container and navbar
  leftContainer.style.display = "block";
  // navBar.style.display = 'flex';

  // Hide navburger
  poster.style.display = "none";

  // Populate menu items (example dynamic content)
  menuContainer.innerHTML = `
<div class="card">
    <div class="item_img"><img src="burger1.png" alt="Burger"></div>
    <div class="card_details">
        <div class="card_content">
            <p class="item_desc">Cheeseburger</p>
            <p class="item_price">$5.99</p>
        </div>
        <button class="add_to_cart">+</button>
    </div>
</div>
<div class="card">
    <div class="item_img"><img src="burger2.png" alt="Burger"></div>
    <div class="card_details">
        <div class="card_content">
            <p class="item_desc">Veggie Burger</p>
            <p class="item_price">$4.99</p>
        </div>
        <button class="add_to_cart">+</button>
    </div>
</div>
<!-- Add more cards here -->
`;

  // Ensure menu container is scrollable
  menuContainer.style.overflowY = "auto";
  menuContainer.style.height = "calc(100vh - 50px)"; // Adjust based on navbar height
});
