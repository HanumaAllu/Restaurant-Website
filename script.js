// Function to fetch and display menu items
async function getMenu() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    const menuItems = await response.json();

    const menuContainer = document.querySelector(".main_container_items");
    menuItems.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <img src="./Assets/burger.png" alt="${item.name}" class="item_img">
                <div class="card_details">
                    <div class="card_content">
                        <div class="item_desc">${item.name}</div>
                        <div class="item_price">$${item.price}</div>
                    </div>
                    <div>
                    
                    <button class="add_to_cart">+</button>
                    </div>
                </div>
            `;
      menuContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
}

// Function to simulate taking an order
function takeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const burgers = [
        "Burger King",
        "Cheese Delight",
        "Veg Supreme",
        "Chicken Burger",
        "Spicy Paneer",
      ];
      const selectedBurgers = [];
      while (selectedBurgers.length < 3) {
        const randomBurger =
          burgers[Math.floor(Math.random() * burgers.length)];
        if (!selectedBurgers.includes(randomBurger)) {
          selectedBurgers.push(randomBurger);
        }
      }
      resolve({ burgers: selectedBurgers });
    }, 2500);
  });
}

// Function to simulate preparing an order
function orderPrep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

// Function to simulate paying for an order
function payOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

// Function to display thank you message
function thankyouFnc() {
  alert("Thank you for eating with us today!");
}

// Sequentially handling promises
async function handleOrder() {
  try {
    console.log("Fetching menu...");
    await getMenu();

    console.log("Taking order...");
    const order = await takeOrder();
    console.log("Order received:", order);

    console.log("Preparing order...");
    const prepStatus = await orderPrep();
    console.log("Order status:", prepStatus);

    console.log("Processing payment...");
    const paymentStatus = await payOrder();
    console.log("Payment status:", paymentStatus);

    if (paymentStatus.paid) {
      thankyouFnc();
    }
  } catch (error) {
    console.error("Error in order process:", error);
  }
}

// Initialize the application
window.onload = () => {
  handleOrder();
};
